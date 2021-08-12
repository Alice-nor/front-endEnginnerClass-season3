let express = require('express');
let app = express();

let processOne = function(req, res, next) {
    console.log('Process one');
    next();
}

let processTwo = function(req, res, next) {
    console.log('Process two');
    next();
}

app.use(function(req, res, next) {
    console.log('Start process -------')
    next();
})

app.get('/one', processOne, processTwo, function(req, res) {
    res.send('To process ONE');
    // 依序印出以下內容
    // Start process -------
    // Process one
    // Process two
})

app.get('/two', processTwo, processOne, function(req, res) {
    res.send('To process TWO');
    // 依序印出以下內容
    // Start process -------
    // Process twp
    // Process one
})

app.listen(8081);