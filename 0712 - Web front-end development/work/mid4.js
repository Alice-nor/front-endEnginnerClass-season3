let express = require('express');
let app = express();

// 顯示時間
app.use(function(req, res, next) {
    console.log('Request Time: ' + new Date());
    req.requestTime = new Date();
    next();
})

// 顯示方法
app.get('/user/:id', function(req, res, next) {
        console.log('Request method: ' + req.method);
        next();
    },
    function(req, res, next) {
        console.log('ID:' + req.params.id);
        // 若 req.params.id == 0
        // http://127.0.0.1:8081/user/0
        // 則跳過此，執行下一個程式（中介軟體）
        if (req.params.id == 0) next('route');
        else next();
    },
    function(req, res) {
        res.send('Regular ID is ' + req.params.id);
    });


// 上面 req.params.id == 0 才會執行下面的例外
// 否則他永遠不會執行到
app.get('/user/:id', function(req, res) {
    res.send('Special ID:' + req.params.id);
})

app.listen(8081);