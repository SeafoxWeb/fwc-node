var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	imagePath: {type: String, required: true},
	title: {type: String, required: true},
	description: {type: String, required: true},
	stock: {type: Number, required: true},
	price: {type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);