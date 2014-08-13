var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('blog', { title: 'blog' });
 
});

module.exports = router;
