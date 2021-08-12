let express = require('express');
let multer = require('multer');
let upload = multer({ dest: './tmp/' }); // 放在哪個目錄底下
let app = express();



//  靜態頁面
app.use(express.static('public'));

// 單個檔案上傳
app.post('/file_upload', upload.single('file'), function(req, res, next) {
    console.log(req.file); // file 對應 html 的 value 值
    console.log('field name: ' + req.file.fieldname);
    console.log('file name: ' + req.file.filename);
    console.log('file path: ' + req.file.path); // 路徑
    console.log('file type: ' + req.file.mimetype); // 檔案格式
    // res.end('upload: ' + req.file.fieldname);
    res.end('upload: ' + req.file.originalname); // 原本檔案名稱
});


// 多個檔案上傳
// ('file', 12) 中的 12 為最多傳輸 12 個檔案
app.post('/multi_upload', upload.array('file', 12), function(req, res, next) {
    console.log('req file: ' + req.files);
    console.log('file length: ' + req.files.length);

    for (let i = 0; i < req.files.length; i++) {
        console.log('field name: ' + req.files[i].fieldname);
        console.log('original name: ' + req.files[i].originalname);
        console.log('file name: ' + req.files[i].filename);
        console.log('file path: ' + req.files[i].path); // 路徑
        console.log('file type: ' + req.files[i].mimetype); // 檔案格式
    }

    // res.end('upload: ' + req.file.fieldname);
    res.end('upload: ' + req.files.length + 'files'); // 原本檔案名稱
});


let server = app.listen(8081, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Listen at http://%s:%s', host, port)
})