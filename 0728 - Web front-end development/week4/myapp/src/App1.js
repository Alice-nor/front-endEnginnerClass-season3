import React from 'react';

// function component 函式元件
function App(props){
    console.log('App.props = ',props)
    return (
        <div>
            <button onClick={props.handleClick}>{props.name}, 大家好！</button>
            <p>{props.children}</p>
            <p>從 props 取得 props.name = {props.name}</p>
            <p>我今年 {props.age} 歲！</p>
        </div>
    );
}

export default App;
