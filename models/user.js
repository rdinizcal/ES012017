var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	email: String,
	name: String,
	id: Integer,
	password: String
});

module.exports = mongoose.model('User', userSchema);

// var User = function(data){
// 	this.email = data["email"];
// 	this.name = data["name"];
// 	this.id = data["id"];
// 	this.password = data["password"];

// 	this.validPassword = function(p){
// 		// return this.password == p
// 		return false;
// 	}
// }

// User.findOne = function(params, callback){
// 	// conect to mongo
// 	// verifica se ta no mongo
// 	// retorna
// 	callback(null, new User({id: 1, email: "hugofagundes07@gmail.com", password: "123456", name: "Hugo"}));
// }
