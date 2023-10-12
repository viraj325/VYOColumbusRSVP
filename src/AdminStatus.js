import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
const Airtable = require('airtable')

const base = new Airtable({
    apiKey: 'patwtNubE5CWiLYdy.07c5751cef17d84a634d736cbc6b7da70ec462cbc9f58a64c033f32559e3edb1'
}).base('appOSKlJfDtxoZS7o')

// FIXME: THIS Isn't ready to be in prod

export default function AdminStatus() {
    let history = useHistory()
    const [users, setUsers] = useState([])

    useEffect(() => {
        retrieveUsers()
    })

    const retrieveUsers = () => {
        setUsers(["test"])
        console.log("users: " + users)
    }

    return (
        <div>
            <div className="helloText">Admin Page</div>
            <div className="titleBanner">List of people who attended...</div>
            <div className="center-container">
                <button className="center-button" onClick={() => {
                    history.push('/a')
                }}>Home</button>
            </div>
        </div>
    )
}