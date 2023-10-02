import './App.css';
import firebase from "firebase/compat/app";
import {useHistory} from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import {useEffect, useState} from "react";

function App() {
  const [value, onChange] = useState(new Date())
  const [events, setEvents] = useState([])
  let history = useHistory();

  useEffect(() => {
    // do something
  })

  function getEvents() {

  }

  const signOut = () => {
    firebase.auth().signOut().then(function() {
      console.log("Successful sign-out")
      history.push("/n")
    }).catch(function(error) {
      console.log("Failed to sign-out.")
      console.log(error)
    });
  }

  return (
    <div>
      <div className="helloText">Hello Viraj!</div>
      <div className="titleBanner">Upcoming Events</div>
      {
        events.length === 0 ?
            <div className="no-upcoming-events-div">
              There are currently no other upcoming events.
            </div> : null
      }
      {
        events.map(() => {
          // do something
        })
      }
      <div className="center-container">
        <button className="center-button" onClick={signOut}>Logout</button>
      </div>
    </div>
  );
}

/*
hierarchy
Subtitle: Number
Title: VYO Columbus
Subtitle: address
Calendar
  ->Events on selected date(Chips)
Donation
Up Next
Logout
 */

export default App;
