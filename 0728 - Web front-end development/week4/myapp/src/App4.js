import React, { useState } from 'react'; // React 一定要的

// React component
function Progress(){
    console.log('Functional Component!')
    // const [狀態變數名稱, 改變狀態的函數名稱]
    // = useState(狀態初始值);
    const [barWidth,setWidth] = useState(0);
    return (
        <div>
            <div className="progress-back"
                style={{
                backgroundColor: 'rgba(0,0,0,0.2)',
                width: '200px',
                height: '20px',
                borderRadius:'10px'
                }}>
                <div className="progress-bar"
                    style={{
                    backgroundColor: '#fe5196',
                    width: barWidth+'%',
                    height: '100%',
                    borderRadius:'10px'
                    }}>
                </div>
            </div>
            <button onClick={()=> {
                if(barWidth>=100){
                    setWidth(0)
                } else{
                    setWidth(barWidth+10)
                }
                }}>更改百分比</button>
        </div>
    )
}

export default Progress;