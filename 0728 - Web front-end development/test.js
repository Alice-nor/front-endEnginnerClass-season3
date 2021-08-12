
// 箭頭函式練習
console.log('--- 箭頭函示 ---')

{
    let bi = (x,y) => {
    if(x>y) return x;
    else return y;
}

let single = x => {return x + x;}

let s2 = x => { return x * 3};


console.log(bi(4,5));
console.log(single(3));
console.log(s2(5));

}

// promise
{

    // console.log('--- promise ---')
    // let x = 10;

    // setTimeout(() => {
    //     x = 12345;
    //     console.log('first succ! x = '+x);
    // }, 5000);

    // setTimeout(() => {
    //     console.log('second succ! x = '+x);
    // }, 3000);

}


// promise ,then


{
    
    console.log('--- promise, then ---');
    let work1 = new Promise((resolve,reject) =>{
        let tm = parseInt(Math.random()*5000+100);
        setTimeout(() => {
            resolve('隨機完成'+tm)
        },tm);
    });

    let work2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('三秒鐘完成');
        },3000);
    })

    let work3 = new Promise((resolve,reject) =>{
        // reject('失敗！')
    });

    Promise.all([work1,work2,work3]).then((data)=> {
        console.log('data: ',data);
    }).catch((e) => {
        console.log('Error: ',e);
    })

    Promise.race([work1,work2]).then((data) => {
        // race 是其中一個有完成即可
        console.log('race: ',data);
    }).catch(e =>{
        console.log('race error: ',e)
    })


}


