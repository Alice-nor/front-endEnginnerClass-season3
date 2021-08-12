import React, {Component} from 'react';
class Brother extends Component {
    constructor(props){
        super(props);
        this.argueForMoney = this.argueForMoney.bind(this);
    }

    argueForMoney() {
        this.props.argue('brother',70);
    }


    render() {
        return (
            <div>
                我是兒子,我拿到{this.props.money}元
                <button onClick={this.argueForMoney}>要求更多錢</button>
            </div>
        )
    }
}

export default Brother;