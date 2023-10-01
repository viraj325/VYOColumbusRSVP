import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Sign from "./Sign";
import Start from "./Start";
import QRCodeGenerator from "./QRCodeGenerator";

function Launch() {
    return (
        <Router basename="/main">
            <Switch>
                <Route path={"/a"} component={App}/>
                <Route path={"/n"} component={Sign}/>
                <Route path={"/qr"} component={QRCodeGenerator}/>
                <Route path={"/"} component={Start}/>
            </Switch>
        </Router>
    )
}

render(<Launch/>, window.document.getElementById('root'));

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
