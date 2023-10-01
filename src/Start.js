import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import firebase from "firebase/compat/app";

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
    }, [history]);
    return(<div/>)
}
export default Start;