let express = require('express');
let multer = require('multer');
let upload = multer({ dest: './tmp/' }); // 放在哪個目錄底下
let app = express();



//  靜態頁面
app.use(express.static('public'));

let cpUpload = upload.fields([
    { name: 'main', maxCount: 1 },
    { name: 'sub', maxCount: 8 }
]);


// 可單個、多個檔案上傳
app.post('/all_upload', cpUpload, function(req, res, next) {
    console.log('Main: ', req.files['main'][0].originalname);
    console.log('# of sub files: ', req.files['sub'].length);

    for (let i = 0; i < req.files['sub'].length; i++) {
        console.log('sub ' + i + ' : ');
        console.log('original file" ' + req.files['sub'][i].originalname);
    }

    console.log('user: ' + req.body['user']);

    // res.end('upload: ' + req.file.fieldname);
    res.end('upload completely!'); // 原本檔案名稱
});



let server = app.listen(8081, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Listen at http://%s:%s', host, port)
})