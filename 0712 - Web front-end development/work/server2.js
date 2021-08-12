let express = require('express');
let app = express();

//  靜態頁面
app.use(express.static('public'));

app.get('/process_get', function(req, res) {
    console.log('req,query:', req.query); // 傳回來是一個物件
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        score: [89, 74, 92]
    }

    // 把物件轉換成 JSON 字串
    res.send(JSON.stringify(response));

    // 表頭只能輸入一次
    // res.send('Your name is ' + req.query.first_name + req.query.last_name);
});

app.get('/format', function(req, res) {
    // format string
    console.log('string:%s, integer:%i, float:%f', 123, 123, 456);
    res.send('Hello world');
})

let server = app.listen(8081, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Listen at http://%s:%s', host, port)
})