import React, { useState } from 'react'; // React 一定要的

// React component
// 用 function 做
function Progress(){
    console.log('Functional Component!')
    // const [狀態變數名稱, 改變狀態的函數名稱]
    // = useState(狀態初始值);
    const [num,setNum] = useState(0);
    return (
        <div style={{
            width:160,
            border: '3px solid black',
            margin:10,
            }}>


            {/* 顯示文字 */}
            <p className="progress-bar"
                style={{
                    fontSize:70,
                    marginTop:0,
                    marginBottom:0,
                    paddingLeft:50,
                    color: 'brown'
                }}>{num}
            </p>

            {/* +1 */}
            <button 
            style={{
                padding:5,
                margin:10,
            }} 
            onClick={()=> {
                setNum(num+1)
            }}>+1</button>

            {/* +1 */}
            <button 
            style={{
                padding:5,
                margin:10,
            }} 
            onClick={()=> {
                setNum(num-1)
            }}>-1</button>

            {/* 全部歸零 */}
            <button 
            style={{
                padding:5,
                margin:10,
            }} 
            onClick={()=> {
                setNum(0)
            }}>歸零</button>
        </div>
    )
}

export default Progress;