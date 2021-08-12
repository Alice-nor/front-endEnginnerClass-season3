import React, { Component } from 'react';
import Item from './Item'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemList:[], // 放入 list 的陣列
            content:'' // 輸入框文字內容
        }
        this.handleChange = this.handleChange.bind(this); // input 輸入
        this.handleClick = this.handleClick.bind(this); // 按下 add
        this.itemClear = this.itemClear.bind(this); // 按下 clear
        this.removeItem = this.removeItem.bind(this); // 按自己本身可刪除
    }

    handleChange(e) {
        // 輸入框之變化
        console.log('text:',e.target.value);
        this.setState({content:e.target.value});
    }

    removeItem(index){
        console.log('removeItem() called by item = ',index);
        if(window.confirm('確定刪除？')===true){
            const old_list = this.state.itemList;
            const new_list = old_list.slice(0,index).concat(old_list.slice(index+1));
            this.setState({itemList: new_list});
        }    
    }

    handleClick(){
        // 按下 add 要新增 list 的變化
        const old_list = this.state.itemList; // 取得陣列
        // 更新新的 list 內容到原本的陣列中
        old_list.push(this.state.content);
        // 呈現陣列並把輸入框之內容清空
        this.setState({itemList: old_list,content:''});
    }

    itemClear(){
        // 清空陣列
        this.setState({itemList:[]});
    }

    render(){
        console.log('App > render()');
        return (
            <div>
                <input type='text'
                    id='fld'
                    value={this.state.content}
                    onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add</button><br/>
                <button onClick={this.itemClear}>Clear</button><br/>
                <div>{
                    this.state.itemList.map((value,index) =>{
                        return <Item text={value} index={index}
                        handleClick={this.removeItem}/>
                    })}
                </div>
            </div>
        )
    }
}

export default App;