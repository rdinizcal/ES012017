var express = require('express');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('users/login', { title: 'LOGIN' });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
      console.log("teste")
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

router.post('/login', function(req, res, next) {
	passport.authenticate('local', { successRedirect: '/users/login',
    failureRedirect: '/login',
    failureFlash: true })
})

module.exports = router;
