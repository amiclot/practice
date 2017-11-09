var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

//Basic setup

//this is my server.js

//require(models/burgers)...

var


// this eventually goes to controllers folder

var router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next(); 
});


router.get('/', function(req, res) {
    res.send('im the home page!');  
});

router.get('/hello/:name', function(req, res) {
	res.send('hello' + req.params.name + "!");
});

router.get('/sample', function(req, res) {
    res.send('this is a poop!');  
});

//router.params
//module.exports = router;
//end controllers


app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);