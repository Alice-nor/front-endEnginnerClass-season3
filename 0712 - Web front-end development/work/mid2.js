let express = require('express');
let app = express();

let requestTime = function(req, res, next) {
    req.requestTime = new Date();
    console.log('requestTime function 裡！');
    console.log('req time : ' + req.requestTime);
    next();
}


// app.use(requestTime);
// 中介可單個寫，也可合併寫
// 下面就是合併的寫法
// requestTime 過濾完成接著執行後面 Hello World

app.get('/', requestTime, function(req, res) {
    let content = 'Hello World';
    content += 'Request at ' + req.requestTime;
    console.log('我在 app.get 裡！')
    res.send(content);
})

app.listen(8081);