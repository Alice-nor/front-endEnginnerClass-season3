// import hello.js
// 記得 import 檔案要加上 .js 副檔名，否則找不到
import tripple,{ helloworld, msg } from './hello.js';
import { helloworld as myFun, msg as myMsg } from './hello.js';
import * as myModule from './hello.js';
import fun from './hello.js' // 會引入預設值（不在括號內為預設）


helloworld();
console.log(`main: ${msg}`);

// 印出
// Hello World!
// main: Hello World

// 以下會印出相同結果
myFun();
console.log(`myMsg: ${myMsg}`);
console.log(`myModule.square(3): ${myModule.square(3)}`);
console.log(`fun(2): ${fun(2)}`); // 引入 default
console.log(`tripple(5): ${tripple(5)}`); // 引入 default