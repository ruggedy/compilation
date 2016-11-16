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

function removeFolder(location, next) {
	fs.readdir(location, function(err, files) {
		async.each(files, function(file, cb) {
			file = location + '/' + file
			fs.stat(file, function(err, stat){
				if (err) {
					return cb(err);
				}
				if(stat.isDirectory()){
					removeFolder(file, cb);
				} else {
					fs.unlink(file, function(err){
						if(err) {
							return cb(err);
						}
						return cb();
					})
				}
			})
		}, function(err){
			if(err) return next(err)
			fs.rmdir(location, function (err) {
				return next(err);
			})
		})
	})
}

router.post('/', multer({dest: './uploads'}).array('uploads[]', 12), function (req, res, next) {
	// console.log(req.files);
	aws.config.update({accessKeyId: 'AKIAIHYDCJUER7UPRKJA', secretAccessKey: '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', region: 'eu-west-1'})
	var s3 = new aws.S3({params: {Bucket: 'damishleyphotos'}});
	
	var location = []

	async.each(req.files, function(file, callback){
		const filePath = file.path;
		const fileName = file.originalname;
		const fileType = file.mimetype;

		fs.readFile('./'+filePath, function(err, data) {
			console.log(data)

			s3.createBucket(function() {
				var params = {
					Key: fileName,
					Body: data,
					ContentType: fileType
				}
				s3.upload(params, function(err, data){
					if(err){
						return callback(err)
					}
					location.push(data.Location);
					fs.unlink(filePath);
					return callback()
				});
			});
					
		});
	}, function(err){
		console.log(location);

		return res.status(200).json({
			message: 'Upload succesful',
			obj: location
		})
	})
                
});




module.exports = router;
