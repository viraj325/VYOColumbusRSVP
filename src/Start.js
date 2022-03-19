import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";

function Start() {
    let history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("isSignedIn") === null)
            history.push("/n");
        else
            if(localStorage.getItem("isSignedIn"))
                history.push("/a");
            else
                history.push("/n");
    }, [history]);
    return(<div/>)
}

export default Start;