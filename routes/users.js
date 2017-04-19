var express = require('express');
var passport = require('passport');

var User = require('../models/user');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('users/login', { title: 'LOGIN', message: req.flash('loginMessage') });
});

/*POST create new user*/
router.post('/',(req,res) => {
  var newUser = new User();
  newUser.local.email = req.body.email,
  newUser.local.password =  newUser.generateHash(req.body.password),


  newUser.save().then((doc) =>{
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});

router.post('/login',passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/users/login',
  passReqToCallback: true,
  failureFlash: true }));

module.exports = router;
