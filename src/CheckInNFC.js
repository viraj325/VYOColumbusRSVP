import './CheckInNFC.css';
import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function CheckInNFC() {
    const [checkedIn, setCheckedIn] = useState(false)
    let history = useHistory()
    let { event } = useParams()

    useEffect(() => {
        // do something
        console.log(event)
        setCheckedIn(true)
    })

    const cancelAction = () => {
        history.push("/a");
    }

    return (
        <div style={{marginTop: "50px"}}>
            {
                checkedIn ?
                    <div className="check-in-text">You've been checked in, thank you!</div> :
                    <div className="check-in-text">Please wait, checking you in!</div>
            }
            <div className="center-container-checkin">
              <button className="center-button-checkin" onClick={cancelAction}>Cancel</button>
            </div>
        </div>
    )
}

export default CheckInNFC;