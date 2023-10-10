import {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"

export default function AdminQRReader() {
    const [url, setURL] = useState("")
    let history = useHistory()

    useEffect(() => {

    }, [url])

    const cancelAction = () => {
        history.push("/a");
    }

    return (
        <div>
            <div className="helloText">Hello Viraj!</div>
            <div className="titleBanner">Upcoming Events</div>
            <div className="center-container">
                <button className="center-button" onClick={() => {
                    history.push('')
                }}>Done</button>
            </div>
        </div>
    )
}