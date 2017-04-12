var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('users/login', { title: 'LOGIN' });

  user = new Object();
  user.name = req.query.name;
  user.email = req.query.email;
});

router.post('/elogin', function(req, res, next) {
	res.send(req.query.email)	
})

module.exports = router;
