var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');
var fs = require('fs');
var compression = require('compression');

var port = process.env.PORT || 3000;

var appRoutes = require('./routes/app');
var imageUploadRoutes = require('./routes/imageUpload');
var postRoutes = require('./routes/posts');
var userRoutes = require('./routes/users');
var blogRoutes = require('./routes/blogs');
var quoteRoutes = require('./routes/quotes');

var app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

// view engine setup
app.set('views', path.join('dist', 'dev'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(compression());
app.use(express.static(__dirname + "/public"));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());



app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept, X-Requested-With')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api/blog', blogRoutes)
app.use('/api/quote', quoteRoutes)
app.use('/api/image-upload', imageUploadRoutes)
app.use('/api/post', postRoutes)
app.use('/api/user', userRoutes);
app.use('/api/', appRoutes);



app.use('/*', function(req, res, next) {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, function(err) {
    console.log('Running server on Port ' + port);
});



