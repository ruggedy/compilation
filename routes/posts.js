var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var fs = require('fs');
var path = require('path');
var Post = require('../models/post');
var Tag = require('../models/tag');
var Category = require('../models/category');
var User = require('../models/user');
var Featured = require('../models/featured');
var mongoose = require('mongoose');
var async = require('async');

// recurring functions

function changeFeatured(result) {
	if (result.featured) {
		Featured.findOne({}, function (err, doc) {
			if (!doc) {
				var featured = new Featured({
					post: result
				})
				featured.save();
			} else {
				Post.findById(doc.post, function (err, data) {
					
					if (data && !data._id.equals(result._id)) {
						data.featured = false;
						data.save();

					}
				})
				doc.post = result;
				doc.save();
			}
		})
	}
}

// resuable functions.

function addPostToCategory(result) {
	Category.findById(result.category, function (err, doc) {
		doc.post.push(result);
		doc.save()
	})
}

function addPostToTags(result) {
	async.each(result.tags, function (id, callback) {
		Tag.findById(id, function (err, doc) {
			doc.post.push(result);
			doc.save();
		})
		callback()
	}, function (err) {
		if (err) {
			console.log(err)
		}
	});
}


// router.use('/', function (req, res, next) {
//     var cert = fs.readFileSync(path.join(__dirname, 'public.pem'));
//     jwt.verify(req.query.token, cert, {algorithms: ['RS256']}, function(err, payload) {

//         if (err) {
//             return res.status(401).json({
//                 title:'Invalid User',
//                 error: err
//             });
//         }
//         next();
//     });
// });

router.post('/', function (req, res, next) {
	console.log(req.body);
	var tags = req.body.tags;
	var post = new Post({
		title: req.body.title,
		body: req.body.body,
		category: req.body.category,
		mainPicture: req.body.mainPicture,
		featured: req.body.featured
	});



	if (tags) {
		for (var i = 0; i < tags.length; i++) {
			post.tags.push(tags[i]);
		}
	}

	post.save(function (err, result) {

		if (err) {
			return res.status(404).json({
				message: "An error Occured",
				error: err
			})
		}
		// set featured post
		changeFeatured(result);
		// add post to category
		addPostToCategory(result);
		//  add post to tags
		addPostToTags(result)
		return res.status(200).json({
			message: "Post Succesfuly saved",
			obj: result
		})
	})

});

router.patch('/featured', function (req, res, next) {
	Featured.findOne({}, function (err, doc) {
		if (err) {
			return res.status(404).json({
				message: "An error Occurred",
				error: err
			})
		}


		if (!doc) {
			var featured = new Featured({
				post: req.body.post
			})
			featured.save();

			Post.findById(req.body.post, function (err, newFeatured) {
				newFeatured.featured = true;
				newFeatured.save()
			})

			return res.status(200).json({
				message: "featured post Succesfully Updated",
				obj: featured
			})
		} else {
			console.log(req.body.post)
			Post.findById(doc.post, function (err, oldFeatured) {
				if (oldFeatured) {
					oldFeatured.featured = false;
					oldFeatured.save();
				}
			})

			Post.findById(req.body.post, function (err, newFeatured) {
				newFeatured.featured = true;
				newFeatured.save()
			})

			doc.post = req.body.post;
			doc.save();

			return res.status(200).json({
				message: "featured post Succesfully Updated",
				obj: featured
			})
		}
	})
});

router.patch('/:id', function (req, res, next) {
	var postId = req.params.id;
	Post.findById(postId, function (err, post) {

		if (err) {
			return res.status(404).json({
				message: 'An Error Occurred',
				error: err
			})
		}

		if (!post) {
			return res.status(404).json({
				message: 'Post Not Found'
			})
		}

		var oldTags = post.tags;

		var oldCategory = post.category;
		var newCategory = req.body.category;

		post.title = req.body.title;
		post.body = req.body.body;
		post.category = req.body.category;
		post.mainPicture = req.body.mainPicture;
		post.featured = req.body.featured;
		post.tags = req.body.tags;

		post.save(function (err, doc) {
			if (err) {
				return status(404).json({
					message: "An Error Occurred",
					error: err
				})
			}

			changeFeatured(doc);

			if (oldCategory !== newCategory) {
				async.each([oldCategory, newCategory], function (id, callback) {
					Category.findById(id, function (err, doc) {
						var index = doc.post.indexOf(postId)
						var isOld = index > -1;

						if (isOld) {
							doc.post.splice(index, 1);
							doc.save();

						}

						if (!isOld) {
							doc.post.push(postId);
							doc.save();
						}

					});
					callback()
				}, function (err) {
					if (err) {
						console.log(error);
					}
				});
			}

			var newTags = doc.tags

			var newFiltered = newTags.filter(function (x) {
				if (oldTags.indexOf(x) !== -1) {
					return false;
				}
				return true;
			});

			var oldFiltered = oldTags.filter(function (x) {
				if (newTags.indexOf(x) !== -1) {
					return false;
				}
				return true;
			});

			async.each([...oldFiltered, ...newFiltered], function (id, callback) {
				Tag.findById(id, function (err, doc) {
					var index = doc.post.indexOf(postId)

					var isOld = index > -1;

					if (isOld) {
						doc.post.splice(index, 1)
						doc.save();
					}

					if (!isOld) {
						doc.post.push(postId);
						doc.save()
					}
				});
				callback();
			}, function (err) {
				if (err) {
					console.log(error);
				}
			})

		})

		return res.status(200).json({
			message: "Succesfully Saved"
		})

	})
});

router.delete('/:id', function (req, res, next) {
	Post.findById(req.params.id, function (err, post) {
		post.remove(function (err) {
			if (err) {
				return rest.status(404).json({
					message: 'An Error Occured',
					error: err
				});
			}

			return res.status(200).json({
				message: "Succesfully Deleted"
			});
		});
	});
});

router.post('/category', function (req, res, next) {
	var category = new Category({
		name: req.body.category
	})

	category.save(function (err, result) {

		if (err) {
			return res.status(404).json({
				message: "An error Occured",
				error: err
			})
		}

		return res.status(200).json({
			message: "category Succesfuly saved",
			obj: result
		})
	})

});

router.get('/category', function (req, res, next) {

	Category.find()
		.exec(function (err, result) {
			if (err) {
				return res.status(404).json({
					message: "An error Occured",
					error: err
				})
			}

			return res.status(200).json({
				message: "category Succesfuly saved",
				obj: result
			})
		})
});

router.get('/tag', function (req, res, next) {
	Tag.find()
		.exec(function (err, result) {
			if (err) {
				return res.status(404).json({
					message: "An error Occured",
					error: err
				})
			}

			return res.status(200).json({
				message: "category Succesfuly saved",
				obj: result
			})
		})

});

router.post('/tag', function (req, res, next) {
	var tag = new Tag({
		name: req.body.tag
	})

	tag.save(function (err, result) {

		if (err) {
			return res.status(404).json({
				message: "An error Occured",
				error: err
			})
		}

		return res.status(200).json({
			message: "tag Succesfuly saved",
			obj: result
		})
	})

});


module.exports = router;