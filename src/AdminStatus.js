import {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"

export default function AdminStatus() {
    let history = useHistory()

    useEffect(() => {}, [])

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