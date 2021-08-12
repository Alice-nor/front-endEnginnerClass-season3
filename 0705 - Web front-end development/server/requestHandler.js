// 路由的請求處理程序
function start(response, postData) {
    console.log(`Request handler 'start' was called`);
    let body = `<html>
    <head>
    <meta http-equic="Content-Type" content="text/html"
    charset=UTF-8" />
    </head>
    
    <body>
    <form action="/upload" method="post">
    <textarea name="text" rows="20" cols="60"></textarea>
    <input type="submit" value="Submit text"/>
    </form>
    </body>
    </html>`;

    // Content-Type 內容格式
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(body);
    response.end();
}

// 剖析 post
let querystring = require('querystring');

function upload(response, postData) {
    console.log(`Request handler 'upload' was called`);
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    // +decodeURI 解碼，讓輸入的中文能成功顯示
    response.write("You've sent [" + decodeURI(postData) + "]", 'utf-8');

    let parm = querystring.parse(postData);
    response.write(`<br>輸入為: ${parm.text}`, 'utf-8');
    response.write(`num1 = ${parm.num1}, num2 = ${parm.num2}`);
    let sum = parseInt(parm.num1) + parseInt(parm.num2);
    response.write(`<br><h1>sum="${sum}"</h1>`);
    response.end();
}

exports.start = start;
exports.upload = upload;