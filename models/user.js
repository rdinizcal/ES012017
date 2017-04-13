var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	email: String,
	name: String,
	id: Integer,
	password: String
})

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
