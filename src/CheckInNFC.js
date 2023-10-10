import './CheckInNFC.css'
import {useHistory, useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import { getAuth } from "firebase/auth"
import Airtable from "airtable"

const auth = getAuth()
const user = auth.currentUser

/*Airtable.configure({
    apiKey: 'patwtNubE5CWiLYdy.07c5751cef17d84a634d736cbc6b7da70ec462cbc9f58a64c033f32559e3edb1'
})*/

const base = new Airtable({
    apiKey: 'patwtNubE5CWiLYdy.07c5751cef17d84a634d736cbc6b7da70ec462cbc9f58a64c033f32559e3edb1'
}).base('appOSKlJfDtxoZS7o')

function CheckInNFC() {
    const [checkedIn, setCheckedIn] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [uid, setUID] = useState("")
    let history = useHistory()
    let { event } = useParams()

    useEffect(() => {
        // do something
        console.log(event)
        if (user !== null) {
            const displayName = user.displayName
            setName(displayName)

            const email = user.email
            setEmail(email)

            const uid = user.uid
            setUID(uid)

            setCheckedIn(true)
            checkInToAirTable()
        } else {
            console.log("User is not logged in, please sign in and try again!")
        }
    }, [])

    function checkInToAirTable() {
        base('Event').create([
            {
                "fields": {
                    "Name": name,
                    "Email": email,
                    "UID": uid
                }
            }], function (err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                console.log(record.getId());
            });
        }).then(r => console.log(r))
    }

    const cancelAction = () => {
        history.push("/a")
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