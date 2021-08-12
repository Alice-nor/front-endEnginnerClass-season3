let server = require('./server');
let router = require('./router');
let requestHandler = require('./requestHandler')


let handle = {}; // 儲存對應之函數
// 依照參數路徑對應到函數並導向頁面
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;

server.start(router.route, handle);