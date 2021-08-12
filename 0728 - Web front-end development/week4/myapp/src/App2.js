import React, { Component } from 'react';

// 標準寫法，除了 App 可能不一樣，其他都差不多一樣
// Class component 類別元件
class App extends Component{
    constructor(props){
        // 從父元件取得傳遞過來之參數
        super(props); // 父層之元素
        this.state = {
            // 當state被改變時
            // 會進入re-render的update程序，並更新畫面
            name: '舊的名字'
        }
        this.changeName = this.changeName.bind(this); // 要記得綁定
    }

    changeName(){
        console.log('changeName clicked!');
        // 這樣才會重劃畫面
        this.setState({name:'** 新的名字 **'});
    }

    render(){
        console.log('App > render()')
        return (
            <div>
                <button onClick={this.props.handleClick}>
                    {this.props.name}, 大家好
                </button><br/>
                <button onClick={this.changeName}>
                    {this.state.name}
                </button>
            </div>
            
        )
    }
}

export default App;