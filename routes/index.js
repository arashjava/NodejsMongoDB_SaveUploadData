var express = require('express');
var router = express.Router();
var Product= require('../models/products');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    var productChunks= [];
    var chunkSize=3;
    for (let i = 0; i < docs.length; i+= chunkSize) {
      productChunks.push(docs.slice(i, i+chunkSize));
    }
    res.render('book/index', { title: 'Express', products: productChunks});
  });
});

module.exports = router;
