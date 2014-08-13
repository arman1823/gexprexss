var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
/*mongoose.connect('mongodb://gisak:ak1323871@kahana.mongohq.com:10080/blog');*/
/*

var Admin = mongoose.model('Admin', { name: String,pass:String });*/

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) // ...
//   console.log('meow');
// });

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('admin', { title: 'admin' });
 
});
router.post('/',function(req,res){
	console.log(req.body.name,req.body.pass);
	res.render('admin',{xuy:'naxuy'});
})

module.exports = router;
