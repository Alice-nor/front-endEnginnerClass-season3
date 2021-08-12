let http = require('http');
let url = require('url');


function start(route, handle) {
    function onRequest(request, response) {
        // 這邊是 get 的方式
        // console.log('Request received');
        // let pathname = url.parse(request.url).pathname;
        // console.log(`Requset for: ${pathname} received`);

        // // router，若連線正確，導向正確的頁面
        // route(handle, pathname, response);

        // 這邊是 post 的方式
        //{
        console.log('Request received');
        let pathname = url.parse(request.url).pathname;
        console.log(`Requset for: ${pathname} received`);
        let query = url.parse(request.url).query;
        console.log(`query = [ ${query}]!`);
        let postData = '';
        if (query !== null) {
            route(handle, pathname, response, postData);
        } else {
            request.setEncoding('utf8');
            // 因為 post 的參數不會顯示在網址上
            // 因此要另外監聽他的參數為何
            request.addListener('data', function(postDataChunk) {
                // 開始監聽
                postData += postDataChunk;
                console.log(`Received POST data chunk [ ${postDataChunk} ]`);
            });
            request.addListener('end', function() {
                route(handle, pathname, response, postData);
            })
        }

        // }


    }


    // listen 監聽
    // http://localhost:8888
    // http://127.0.0.1:8888

    // 如果 port 是 80
    // 網址為 http://localhost，因為 80 為預設
    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

exports.start = start;