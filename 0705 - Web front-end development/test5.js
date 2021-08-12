let fs = require('fs');

let str = '';
for (let i = 0; i < 10; i++) {
    str += `line# ${i}` + '\n';
}

console.log('str', str);

// 同步寫入檔案，阻塞式(blocking)寫入
fs.writeFileSync('./data123.txt', str);
fs.readFile('./data123.txt', function(err, data) {
    if (err) throw err;
    console.log('readFile:' + data);
})

// 非同步寫入檔案，非阻塞式(non-blocking)寫入
fs.writeFile('./data124,txt', str, function(err) {
    if (err) throw err;
    console.log(`writeFile success!`)
})

console.log('After writeFile!');
let str2 = fs.readFileSync('./data124.txt');
console.log('str2 = ' + str2);