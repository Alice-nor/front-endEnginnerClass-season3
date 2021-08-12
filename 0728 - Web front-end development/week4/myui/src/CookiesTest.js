import React from 'react';
import { useCookies } from 'react-cookie';

export default function App() {
    // useCookies 存放陣列，可多個參數
    const [cookies, setCookie, removeCookie] = useCookies('user','passwd');

    const handleSetCookie = () => {
        setCookie('user','admin',{path:'/'});
        setCookie('passwd','akskdfslf',{path:'/'});
        setCookie('counter','123',{path:'/'});

    }

    return (
        <div className="App">
            <h1>React Cookie</h1>
            <p>{cookies.user+ ' '+ cookies.passwd+ ' '+cookies.counter}</p>
            <button onClick={handleSetCookie}>Set Cookie</button>
            <button onClick={removeCookie}>Remove Cookie</button>
        </div>
    )
}