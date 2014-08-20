var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://gisak:ak1323871@kahana.mongohq.com:10080/blog');
console.log("mongodb://gisak:ak1323871@kahana.mongohq.com:10080/blog");


/* GET users listing. */
router.get('/', function(req, res) {
  res.render('admin', { title: 'admin' });
 
});
router.post('/',function(req,res){
	var Admin = mongoose.model('Admin', { name: String,pass:String });
	var user = new Admin({ name: req.body.name, pass: req.body.pass});
	user.save(function (err) {
	  if (err) {
	  	console.log(err);
	  }
	  console.log('meow');
	});
	console.log(req.body.name,req.body.pass);
	res.render('admin',{xuy:'naxuy'});
})

module.exports = router;
