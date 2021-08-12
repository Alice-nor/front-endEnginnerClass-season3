var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/test/:id', function(req, res, next) {
    if (req.params.id == 0)
        res.render('test');
    else
        res.render('test' + req.params.id);
});

module.exports = router;