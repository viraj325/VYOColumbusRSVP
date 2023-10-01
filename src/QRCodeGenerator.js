import './App.css';
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
    const [value, onChange] = useState(new Date())
    let history = useHistory()

    useEffect(() => {
        // do something
    })

    const cancelAction = () => {
        history.push("/a");
    }

    return (
        <div style={{marginTop: "50px"}}>
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={value}
                    viewBox={`0 0 256 256`}
                />
            </div>

            <div className="center-container">
              <button className="center-button" onClick={cancelAction}>Cancel</button>
            </div>
        </div>
    )
}

export default QRCodeGenerator;
