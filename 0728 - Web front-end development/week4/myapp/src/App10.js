import React from "react";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import FirstPage from './FirstPage2';
import SecondPage from './SecondPage2';
import NotFound from './NotFound';
import Layoyt from './Layout'


const App=()=>{
    return (
        <HashRouter>
            <Switch>
                <Layoyt>
                    {/* 由上往下做匹配，匹配到就不會匹配後面的頁面 */}
                    <Route exact path='/' component={FirstPage}/>
                    <Route path='/second' component={SecondPage}/>
                   
                    
                    {/* 沒有給路徑，代表若上頭都沒匹配到，則會匹配這一個沒給路徑的 */}
                    {/* <Route component={NotFound}/> */}
                </Layoyt>             
            </Switch>
        </HashRouter>
    )
}

export default App;