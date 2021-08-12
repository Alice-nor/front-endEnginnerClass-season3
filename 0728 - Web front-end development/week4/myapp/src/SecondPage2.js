import React from "react";
import { Link } from "react-router-dom";

const SecondPage = (props) => {
    console.log('SecondPage!',props);
    return (
            <h1 style={{color:'white', fontFamily:'Microsoft JhengHei'}}>我是第二頁</h1>
    )
}

export default SecondPage;
