var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello Express11' });
});

router.get('/about', function (req, res) {
  var data = {
    "wei": "you are so smart!!!"
  };

  res.json(data);
})

module.exports = router;
