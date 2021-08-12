let express = require('express');
let app = express();


// 中介軟體裡的 next() 很重要
// 若沒有則會卡在那一處，而不會往下跑程式
let myLogger = function(req, res, next) {
    console.log('LOGGED!');
    next();
}

let myEnding = function(req, res, next) {
    console.log('EDNING');
    next();
}

app.use(myLogger);

app.get('/', function(req, res) {
    console.log('show hello world');
    res.send('Hello World');
});

app.use(myEnding); // get 符合就不會印出，若出現不符合之頁面，才會印出
app.listen(8081);