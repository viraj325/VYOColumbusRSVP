import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom"
import firebase from "firebase/compat/app"

const firebaseConfig = {
    apiKey: "AIzaSyCpEJlLKZqD3oyL45Vwqa6LVsnQ1goqT6w",
    authDomain: "vyocolumbus-24979.firebaseapp.com",
    databaseURL: "https://vyocolumbus-24979-default-rtdb.firebaseio.com",
    projectId: "vyocolumbus-24979",
    storageBucket: "vyocolumbus-24979.appspot.com",
    messagingSenderId: "798982643669",
    appId: "1:798982643669:web:75c337f1eda20ab985275c"
}

firebase.initializeApp(firebaseConfig)

function Start() {
    let history = useHistory()

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                //signed in
                console.log("Already Signed")
                history.push("/a")
            } else {
                // No user is signed in.
                console.log("Login/Register")
                history.push("/n")
            }
        })
        /*if (localStorage.getItem("isSignedIn") === null)
            history.push("/n");
        else
            if(localStorage.getItem("isSignedIn"))
                history.push("/a");
            else
                history.push("/n");*/
    }, [history])
    return(<div/>)
}
export default Start