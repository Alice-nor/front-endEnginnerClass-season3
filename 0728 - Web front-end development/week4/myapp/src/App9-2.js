import React, {Component} from 'react';
import Baby from './Baby';

class App extends Component {
    constructor(props){
        super(props);
        this.state={

        }
        this.handleClick = this.handleClick.bind(this);
        this.spawnBaby = this.spawnBaby.bind(this);
        this.handleForceUpdate = this.handleForceUpdate.bind(this);
    }


    handleClick(){
        this.setState({isBorn: !this.state.isBorn});
    }

    spawnBaby(){
        if(this.state.isBorn){
            return <Baby dad='Chang'/>;
        }
    }

    // update processing
    shouldComponentUpdate(nextProps,nextState){
        console.log('APP > shouldComponentUpdate, nextProps:',nextProps,'nextState:',nextState);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('APP > getSnapshotBeforeUpdate, prevprops:',prevProps,'prevState:',prevState);
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('APP > componentDidUpdate, prevProps:',prevProps,'prevState:',prevState);
        console.log('APP > snapshot',snapshot);
        if(this.props.A === 20 && prevProps.A != this.props.A){
            this.setState({A:100});
        }
    }

    // 強制更新
    handleForceUpdate(){
        this.forceUpdate();
    }

    render(){
        console.log('App > render() > state.A',this.state.A)
        return (
            <div>
                <button onClick={this.handleForceUpdate}>Force update</button>
                <button onClick={this.handleClick}>
                    {(this.state.isBorn)?'生出來了':'讓他生'}
                </button>
                {this.spawnBaby()}
            </div>
        )
    }
}

export default App;