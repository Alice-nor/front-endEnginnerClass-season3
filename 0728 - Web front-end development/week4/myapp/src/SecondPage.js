import React from "react";
import { Link } from "react-router-dom";

const SecondPage = (props) => {
    const StyleSheet = {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#08D9D6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
    console.log('SecondPage!',props);
    return (
        <div style={StyleSheet}>
            Mathced:{props.match.params.var}
            <Link to='/'>點我到第一頁</Link>
            <h1 style={{color:'white', fontFamily:'Microsoft JhengHei'}}>我是第二頁</h1>
        </div>
    )
}

export default SecondPage;
