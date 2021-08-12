import React, { Component } from 'react';
// class component 類別元件
class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.itemProc = this.itemProc.bind(this);
        
    }
    itemProc(){
        // 回傳 index
        this.props.handleClick(this.props.index);
    }

    render(){
        return (
            <li onClick={this.itemProc}
                index={this.props.index}>
                {this.props.text}</li>
        )
    }
}

export default Item;