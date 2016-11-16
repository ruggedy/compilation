var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	title: { type: String, required: true },
	body: { type: String, required: true },
	mainPicture: { type: String },
	featured: { type: Boolean, required: true, default: false },
	category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
	tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
	
},{timestamps: true});

schema.pre('remove', function (next) {
	var post = this;

	post.model('Category').update(
		{ _id: { $in: post.category } },
		{ $pull: { post: post._id } },
		{ multi: true },
		next
	)

	post.model('Tag').update(
		{ _id: { $in: post.tags } },
		{ $pull: { post: post._id } },
		{ multi: true },
		next
	)
	next()
})

module.exports = mongoose.model('Post', schema)