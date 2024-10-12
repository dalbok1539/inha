var express = require('express');
var router = express.Router();

/* GET home page.
 /까지가 localhost 3000까지 뜻함 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '익스프레스' });
});

module.exports = router;
