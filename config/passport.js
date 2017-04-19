var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

module.exports = function(passport){
  passport.serializeUser(function(user,done){
    done(null,user._id);
  });

  passport.deserializeUser(function(id,done){
    User.findById(id, function(err,user){
      done(err,user);
    });
  });

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password,done){
    User.findOne({'local.email': email}, function(err, user){
      if(err) return done(err);
      if(!user) return done(null,false,req.flash('loginMessage','Usuário não encotrado'));
      if(!user.validPassword(password)) return done(null,false,req.flash('loginMessage','Senha Incorreta'));
      return done(null,user);
    });
  }));
};
