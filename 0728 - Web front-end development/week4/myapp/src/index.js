import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Baby';
import reportWebVitals from './reportWebVitals';
import App from './App7';
// import 自建之 module
// import Progress from './Progress.js'; 


ReactDOM.render( 
    <div>
        <App A={200}/>
        <div id='talk'></div>
    </div>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();