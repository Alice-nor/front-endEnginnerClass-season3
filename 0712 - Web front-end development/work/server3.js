let express = require('express');
let app = express();
let bodyParser = require('body-parser'); // post 要引入此模組
let urlencodedParser = bodyParser.urlencoded({ extended: false });


//  靜態頁面
app.use(express.static('public'));

app.post('/process_post', urlencodedParser, function(req, res) {
    console.log('req,query:', req.query); // 傳回來是一個物件
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }

    console.log(req.body)

    // 把物件轉換成 JSON 字串
    res.end('Post:' + JSON.stringify(response));

    // 表頭只能輸入一次
    // res.send('Your name is ' + req.query.first_name + req.query.last_name);
});

let server = app.listen(8081, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Listen at http://%s:%s', host, port)
})