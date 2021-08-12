// 可讓其他檔案使用的模組
export const helloworld = () =>{
    console.log('Hello World!');
}
export const msg = 'Hello World';

const square = (x) => x * x;
const obj = { name: 'John', age:20 };
export { square, obj}; // 把已宣告之變數一起 export

export default square; // 預設