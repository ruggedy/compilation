var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
	post: [{type: Schema.Types.ObjectId, ref:'Post'}]
});

module.exports = mongoose.model('Tag', schema)