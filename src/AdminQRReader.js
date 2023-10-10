import {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"

export default function AdminQRReader() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [uid, setUID] = useState("")
    let history = useHistory()

    useEffect(() => {}, [])

    return (
        <div>
            <div className="helloText"></div>
            <div className="titleBanner">Upcoming Events</div>
            <div className="center-container">
                <button className="center-button" onClick={() => {
                    history.push('/admin/status')
                }}>Done</button>
            </div>
        </div>
    )
}