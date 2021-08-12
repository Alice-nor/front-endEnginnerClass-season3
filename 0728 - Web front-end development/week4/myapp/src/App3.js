import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            barWidth: 0,
            tmp:0
        }
        this.flag = true;
        this.changePercent = this.changePercent.bind(this);
    }

    changePercent() {
        this.setState({counter:123,tmp:undefined});
        console.log('changePercent: barWidth = ',this.state.barWidth);
        if(this.state.barWidth>=100){
            this.setState({barWidth:0});
            console.log('changePercent:callback barWidth = ',this.state.barWidth);

        } else {
            this.setState({barWidth:this.state.barWidth+10},() => {
                // callback 當狀態變數的值更新後會來執行此函式
                if(this.state.barWidth===50){
                    console.log('Half Width!');
                    console.log('changePercent:callback barWidth = ',this.state.barWidth);

                }
            })
        }
        console.log('changePercent:after, barWidth = ',this.state.barWidth);

    }

    render() {
        console.log('state:',this.state);
        return ( 
        <div>
            <div className = "progress-back"
            style = {
                {
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    width: '200px',
                    height: '20px',
                    borderRadius: '10px'
                }
            } >
            <div className = "progress-bar"
            style = {
                {
                    backgroundColor: '#fe5196',
                    width: this.state.barWidth+'%',
                    height: '100%',
                    borderRadius: '10px'
                }
            } >
            </div>
        </div> 
        <button onClick = { this.changePercent } > 更改百分比 </button>
        </div>
        )
    }
}

export default App;