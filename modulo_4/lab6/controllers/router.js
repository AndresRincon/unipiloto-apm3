var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.render('index', {'title' : 'Lab5'});
});

router.get('/contac', function(req, res){
	res.render('contact', {'title' : 'Lab5'});
});

module.exports = router;