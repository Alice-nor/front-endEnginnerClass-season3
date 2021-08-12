let express = require('express');
let app = express();
app.get('/', function(req, res) {
    res.send('Hello GET');
});

app.post('/', function(req, res) {
    res.send('Hello world')
});

app.get('/list_user', function(req, res) {
    res.send('get list_user')
});

// 路徑符合 /acd /abcd
// 因為 b 後面有 ?，所以 b 可有可無
app.get('/ab?cd', function(req, res) {
    res.send('get ab?cd')
});

// 路徑符合 /abcd, /abxcd, /abxydpe...
// ab*cd 代表 ab 後可有無限多個字母，並以 cd 結尾
app.get('/ab*cd', function(req, res) {
    res.send('get /ab*cd:' + req.url)
});


// 路徑符合 /wxyz /wxxyz /wxxxxyz
// + 代表 + 前面的字母可以出現無數次以上
app.get('/wx+yz', function(req, res) {
    res.send('get /wx+yz:' + req.url)
});


// 路徑符合 /test /tesest
// () 與 ? 都代表可有可無
app.get('/tes(es)?t', function(req, res) {
    res.send('get /tes(es)?t:' + req.url)
});

app.get('/tes(es)+t', function(req, res) {
    // + 就代表前面可以無限次，這邊就是 es 可以無限次
    res.send('get /tes(es)+t:' + req.url)
});


app.listen(8081, function() {
    console.log('Server is running')
});