var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	post: {type: Schema.Types.ObjectId, ref:'Post'}
});

module.exports = mongoose.model('Featured', schema)