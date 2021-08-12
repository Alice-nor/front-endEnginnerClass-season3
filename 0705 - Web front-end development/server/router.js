// 取得回應，分辨是否連線正常
function route(handle, pathname, response, postData) {
    console.log('---------')
    console.log(`About to route a request for ${pathname}`);
    // 檢查是否為函數
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);

    } else { // 沒有此對應函數，輸出錯誤訊息
        console.log('No handle for  ' + pathname);
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.write('404 not found!');
        response.end();
    }
}

exports.route = route;