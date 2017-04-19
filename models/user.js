var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	local:{
		email: String,
		password: String
	},
	facebook: {
		id: String,
		token: String,
		email: String,
		name: String
	},
	google: {
		id: String,
		token: String,
		email: String,
		name: String
	},
	forms: {

	}
});

/*Generating hash*/
userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null);
};

/*checking if password is vaid*/
userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
}

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
