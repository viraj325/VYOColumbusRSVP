import './CheckInNFC.css';
import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Airtable from "airtable";

/*Airtable.configure({
    apiKey: 'patwtNubE5CWiLYdy.07c5751cef17d84a634d736cbc6b7da70ec462cbc9f58a64c033f32559e3edb1'
})*/

const base = new Airtable({
    apiKey: 'patwtNubE5CWiLYdy.07c5751cef17d84a634d736cbc6b7da70ec462cbc9f58a64c033f32559e3edb1'
}).base('appOSKlJfDtxoZS7o');

function CheckInNFC() {
    const [checkedIn, setCheckedIn] = useState(false)
    let history = useHistory()
    let { event } = useParams()

    useEffect(() => {
        // do something
        console.log(event)
        setCheckedIn(true)
        checkInToAirTable()
    })

    function checkInToAirTable() {
        base('Event').create([
            {
                "fields": {
                    "Name": "Viraj"
                }
            }], function (err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                console.log(record.getId());
            });
        })
    }

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
            <div className="center-container-check-in">
              <button className="center-button-check-in" onClick={cancelAction}>Cancel</button>
            </div>
        </div>
    )
}

export default CheckInNFC;