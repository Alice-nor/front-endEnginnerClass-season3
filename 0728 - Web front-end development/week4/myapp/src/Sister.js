import React, {Component} from 'react';
class Sister extends Component {
    constructor(props){
        super(props);
        this.argueForMoney = this.argueForMoney.bind(this);
    }

    argueForMoney() {
        this.props.argue('sister',70);
    }


    render() {
        return (
            <div>
                我是女兒,我拿到{this.props.money}元
                <button onClick={this.argueForMoney}>要求更多錢</button>
            </div>
        )
    }
}

export default Sister;