var express = require('express');
var router = require('express').Router();

router.use(express.static(__dirname + '/../assets'))

router.get('/layouts/index.html', function (req, res) {
    res.sendFile('index.html', {root: './layouts'});
})

module.exports = router;