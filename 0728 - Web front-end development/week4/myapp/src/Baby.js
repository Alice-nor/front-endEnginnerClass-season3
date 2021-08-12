import React,{ Component } from 'react';

class Baby extends Component {
    constructor(props){
        super(props);
        this.state={
            isRightDad: true
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps()');
        if(props.dad!=='Chang'){
            return { isRightDad:false }
        }
        else{
            return null; // 不做反應
        }
    }

    // render 結束後才回執行，類似元件後製處理
    componentDidMount(){
        console.log('componentDidMount()');
        setTimeout(() => {
            if(this.state.isRightDad){
                document.getElementById('msg').innerHTML = '他的媽媽是小美';
            }
            else{
                document.getElementById('msg').innerHTML = '他的媽媽是誰，我不知道。'
            }
        }, 3000);
        document.getElementById('talk').append('爸！')
    }
    
    // 元件被移除前的處理
    // 若註解掉， componentDidMount 的字串“爸”會被保留
    componentWillUnmount(){
        console.log('componentWillUnmount()');
        document.getElementById('talk').innerHTML='';
    }

    render(){
        console.log('render()');
        return (
            <div>
                <div id='msg'>
                    {/* 以下為資料還未載完會出現的訊息 */}
                    讀取中......
                </div>
                {this.props.dad}
                {(this.state.isRightDad)?'是':'不是'}我的爸爸！
            </div>
        )
    }
}

export default Baby;