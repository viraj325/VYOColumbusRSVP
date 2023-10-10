import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import reportWebVitals from './reportWebVitals'
import QRCodeGenerator from "./QRCodeGenerator"
import AdminQRReader from "./AdminQRReader"
import AdminStatus from "./AdminStatus"
import CheckInNFC from "./CheckInNFC"
import { render } from 'react-dom'
import Start from "./Start"
import Sign from "./Sign"
import React from 'react'
import App from './App'
import './index.css'

function Launch() {
    return (
        <Router basename="/main">
            <Switch>
                <Route path={"/a"} component={App}/>
                <Route path={"/n"} component={Sign}/>
                <Route path={"/c/:event"} component={CheckInNFC}/>
                <Route path={"/qr"} component={QRCodeGenerator}/>
                <Route path={"/admin/qr-reader"} component={AdminQRReader}/>
                <Route path={"/admin/status"} component={AdminStatus}/>
                <Route path={"/"} component={Start}/>
            </Switch>
        </Router>
    )
}

render(<Launch/>, window.document.getElementById('root'))
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()