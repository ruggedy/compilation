var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var fs = require('fs');
var multer = require('multer');
var path = require('path');
var Post = require('../models/post');
var Tag = require('../models/tag');
var Category = require('../models/category');
var User = require('../models/user');
var mongoose = require('mongoose');
var async = require('async');
var aws = require('aws-sdk');
var Featured = require('../models/featured');

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

router.get('/', function (req, res, next) {
	Post.find()
		.populate('tags')
		.populate('category')
		.exec(function (err, doc) {
			if (err) {
				return res.status(404).json({
					message: 'An error occured',
					obj: err
				})
			}

			return res.status(200).json({
				message: 'Succecful',
				obj: doc
			})
		})
})

router.get('/tags', function (req, res, next) {
	Tag.find()
		.exec(function (err, doc) {
			if (err) {
				return res.status(404).json({
					message: 'An error occured',
					obj: err
				})
			}

			return res.status(200).json({
				message: 'Succecful',
				obj: doc
			})
		})
})

router.get('/categories', function (req, res, next) {
	Category.find()
		.exec(function (err, doc) {
			if (err) {
				return res.status(404).json({
					message: 'An error occured',
					obj: err
				})
			}

			return res.status(200).json({
				message: 'Succecful',
				obj: doc
			})
		})
})

router.get('/featured-post', function (req, res, next) {
	Featured.findOne({})
		.populate('post')
		.exec(function (err, doc) {
			if (err) {
				return res.status(404).json({
					message: 'An error occured',
					obj: err
				})
			}

			return res.status(200).json({
				message: 'Succecful',
				obj: doc
			})
		})
})




module.exports = router;
