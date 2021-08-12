// 解構賦值
{

    console.log('--- 解構賦值 ---');
    let arr = ['apple','banana'];
    let [a,b] = arr;
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);

    const obj = { fruitOne: 'watermelon', fruitTwo: 'mango'};
    let {fruitOne:c, fruitTwo:d} = obj;
    console.log(`c = ${c}`);
    console.log(`d = ${d}`);
}