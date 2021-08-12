import React from "react";
import { Link } from "react-router-dom";

const FirstPage = (props) => {
    const StyleSheet = {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FF2E63',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
    console.log('FirstPage!',props);
    return (
        <div style={StyleSheet}>
            Mathced:{props.match.params.id}
            <Link to='/second'>點我到第二頁</Link>
            <h1 style={{color:'white', fontFamily:'Microsoft JhengHei'}}>我是第一頁</h1>
        </div>
    )
}

export default FirstPage;