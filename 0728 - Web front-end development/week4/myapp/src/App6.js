import React, { Component } from 'react';

// 用 class 做
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
        this.flag = true;
        this.addOne = this.addOne.bind(this);
        this.subOne = this.subOne.bind(this);
        this.setZero = this.setZero.bind(this);
    }

    addOne(){
        // 加一
        this.setState({counter: this.state.counter+1});
    }
    subOne(){
        this.setState({counter: this.state.counter-1});
        // 減一
    }
    setZero(){
        this.setState({counter: this.state.counter=0});
        // 歸零
    }

    render(){
        console.log('state:',this.state);
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.subOne}>-1</button>
                <button onClick={this.setZero}>歸零</button>
            </div>
        )
    }  
}

export default App;