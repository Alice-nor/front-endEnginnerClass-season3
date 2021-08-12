import { AppsRounded } from '@material-ui/icons';
import React from 'react';
import { withCookies } from 'react-cookie';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.cookies.get('user') || '',
            passwd: '',
        }
        this.handleRemoveCookie = this.handleRemoveCookie.bind(this);
        this.handleSetCookie = this.handleSetCookie.bind(this);
    }

    handleSetCookie = () => {
        const { cookies } = this.props;
        cookies.set('user','obyudl', { path: '/'}); // set the cookie
        cookies.set('passwd','123456', { path: '/'});
        this.setState({ user: cookies.get('user'), passwd: cookies.get('passwd')});
    }

    handleRemoveCookie = () => {
        const { cookies } = this.props;
        cookies.remove('user'); // remove the cookie
        cookies.remove('passwd');
        this.setState({ user: cookies.get('user'), passwd: cookies.get('passwd')});
    }

    render() {
        const { user, passwd } = this.state;
        return (
            <div className='App'>
                <h1>React Cookie</h1>
                { user && <p>user={user},passwd={passwd}</p>}
                <button onClick={handleSetCookie}>Set Cookie</button>
            <   button onClick={handleRemoveCookie}>Remove Cookie</button>
            </div>
        )
    }
}

export default withCookies(AppsRounded);