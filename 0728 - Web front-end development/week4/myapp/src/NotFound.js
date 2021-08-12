import React from "react";

const NotFound = () => {
    const StyleSheet = {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
    console.log('NotFound!');
    return (
        <div style={StyleSheet}>
            <h1 style={{color:'white', fontFamily:'Microsoft JhengHei'}}>404：無此頁面！</h1>
        </div>
    )
}

export default NotFound;