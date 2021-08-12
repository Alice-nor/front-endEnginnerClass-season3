let fs = require('fs');

// 同步讀取檔案
let data = fs.readFileSync('./server.js', 'utf8');
console.log('reading: ' + data);

// 非同步讀取檔案
// fs.readFile(fileName [, options], callback)

let data2 = '';
fs.readFile('./server.js', function(err, file_data) {
    if (err) throw err;
    console.log(`readFile: ${file_data.toString()}`);
    // file_data 回傳一個結構，，因此把它轉為字串
});

console.log(`After readFile()`);