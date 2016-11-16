var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    quote: {type: String, required: true}
});

module.exports = mongoose.model('Quote', schema)