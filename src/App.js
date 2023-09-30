import './App.css';
import firebase from "firebase/compat/app";
import {useHistory} from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import {useEffect, useState} from "react";

firebase.initializeApp({
  apiKey: "AIzaSyCpEJlLKZqD3oyL45Vwqa6LVsnQ1goqT6w",
  authDomain: "vyocolumbus-24979.firebaseapp.com",
  projectId: "vyocolumbus-24979",
  //storageBucket: "vyocolumbus-24979.appspot.com",
  messagingSenderId: "798982643669",
  appId: "1:798982643669:web:75c337f1eda20ab985275c"
})

function App() {
  const [value, onChange] = useState(new Date());
  let history = useHistory();

  useEffect(() => {
    // do something
  })

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
