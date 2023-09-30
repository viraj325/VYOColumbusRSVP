import './App.css';
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
  const [value, onChange] = useState(new Date());
  let history = useHistory();

  useEffect(() => {
    // do something
  })

  return (
    <div>
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={value}
                viewBox={`0 0 256 256`}
            />
        </div>
    </div>
  );
}

export default QRCodeGenerator;
