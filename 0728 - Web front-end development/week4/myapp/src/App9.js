import React, { Component } from 'react';
import Item from './Item'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemList:[], // 未完成項目之陣列
            okList:[], // 已完成項目之陣列
            content:'' // 輸入框文字內容
        }

        this.handleChange = this.handleChange.bind(this); // input 輸入
        this.handleClick = this.handleClick.bind(this); // 按下 add 新增未完成項目
        this.itemClear = this.itemClear.bind(this); // 清空未完成陣列
        this.removeItem = this.removeItem.bind(this); // 未完成項目變至已完成陣列內
        this.removeOk = this.removeOk.bind(this); // 清空已完成項目
        this.okClear = this.okClear.bind(this); // 清空已完成陣列
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    // 輸入框之變化並取得 value
    handleChange(e) {
        console.log('text:',e.target.value);
        this.setState({content:e.target.value});
    }

    // 把項目新增到 已完成項目 列
    removeItem(index){
        console.log('removeItem() called by item = ',index);
        if(window.confirm('確定移到已完成清單？')){
            const old_list = this.state.itemList; // 取得未完成陣列
            const new_list = old_list.slice(0,index).concat(old_list.slice(index+1)) // 取得更改後之未完成陣列
            const ok_list = this.state.okList // 取得已完成陣列
            
            // 把已完成的項目加入到 已完成項目 列
            ok_list.push(old_list[index]); // 新增項目至已完成陣列
            this.setState({okList: ok_list}); // 更新已完成陣列
            this.setState({itemList: new_list}); // 更新未完成陣列 

            // 下面是簡易寫法
            // this.setState({itemList: new_list , okList: ok_list}) 
        }  
    }

    // 按下 add 要新增 list 的變化
    handleClick(){
        const old_list = this.state.itemList; // 取得陣列
        // 更新新的 list 內容到原本的陣列中
        old_list.push(this.state.content);
        // 呈現陣列並把輸入框之內容清空
        this.setState({itemList: old_list,content:''});
    }

    // 不用按下按鍵，使用 enter 就可加入項目
    handleKeyPress(e){
        console.log('key:',e.key)
        if(e.key==='Enter'){
        const old_list = this.state.itemList;
        old_list.push(this.state.content);
        this.setState({itemList: old_list,content:''});
        }
    }
    // 清空未完成陣列
    itemClear(){
        if(window.confirm('確定刪除？')===true){
            this.setState({itemList:[]});
        } 
    }

    // 清空已完成項目
    removeOk(index){
        if(window.confirm('確定刪除？')===true){
            const finish_list = this.state.okList;
            const change_list = finish_list.slice(0,index).concat(finish_list.slice(index+1));
            this.setState({okList: change_list});
        } 
    }

    // 清空已完成陣列
    okClear(){
        if(window.confirm('確定刪除？')===true){
            this.setState({okList:[]});
        } 
    }

    render(){
        console.log('App > render()');
        return (
            <div>
                <input type='text' value={this.state.content}
                    id='fld'
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}></input>
                <button onClick={this.handleClick}>新增工作項目</button><br/>
                未完成項目<button onClick={this.itemClear}>清空未完成項目</button>
                <div>{
                    this.state.itemList.map((value,index)=>{
                        return <Item text={value} index={index}
                        handleClick={this.removeItem} />
                    })
                    }
                </div>
                <p>============</p><br/>
                已經完成項目<button onClick={this.okClear}>清空已完成項目</button>
                <div>{
                    this.state.okList.map((value,index)=>{
                        return <Item text={value} index={index}
                        handleClick={this.removeOk} />
                    })
                    }
                </div>
            </div>
        )
    }
}

export default App;