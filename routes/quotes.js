var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var fs = require('fs');
var path = require('path');
var Quote = require('../models/quote');
var mongoose = require('mongoose');
var async = require('async');


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
	Quote.findOne({}, function (err, result) {
		if (err) {
			return res.statu(404).json({
				message: "An Error Occured",
				error: err
			});
		}

		if (!result) {
			return res.status(404).json({
				message: "Quote Not Found",
			})
		}

		return res.status(200).json({
			message: "Successful",
			obj: result
		})
	});
})

router.post('/', function (req, res, next) {
	console.log(req.body)
	var quote = new Quote({
		quote: req.body.quote
	});

	quote.save(function (err, result) {
		if (err) {
			return res.status(404).json({
				message: 'An Error Occurred',
				error: err
			});
		}

		return res.status(200).json({
			message: 'Successfully created',
			obj: result
		})
	});
});

router.patch('/', function (req, res, next) {
	Quote.findOne({}, function (err, doc) {
		if (err) {
			return res.status(404).json({
				message: "An Error Occurred",
				error: err
			});
		}

		if (!doc) {
			return res.status(404).json({
				message: "No Quote Found"
			})
		}

		doc.quote = req.body.quote;

		doc.save(function (err, result) {
			if (err) {
				return res.status(404).json({
					message: "An Error Occurred",
					error: err
				});
			}

			return res.status(200).json({
				message: "Successfully Changed",
				obj: result
			})
		})
	})
});

router.delete('/', function (req, res, next) {
	Quote.findOne({}, function(err, doc){
		if (err) {
			return res.status(404).json({
				message: "An Error Occurred",
				error: err
			});
		}

		if (!doc) {
			return res.status(404).json({
				message: "No Quote Found"
			})
		}

		doc.remove(function(err, result){
			if (err) {
			return res.status(404).json({
				message: "An Error Occurred",
				error: err
			});
		}

			return res.status(200).json({
				message: "Successfully Deleted",
				obj: result
			})
		})
	})
});


module.exports = router;