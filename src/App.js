import logo from './logo.svg';
import './App.css';
import firebase from "firebase/compat/app";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
const firebaseConfig = {
  apiKey: "AIzaSyCpEJlLKZqD3oyL45Vwqa6LVsnQ1goqT6w",
  authDomain: "vyocolumbus-24979.firebaseapp.com",
  projectId: "vyocolumbus-24979",
  //storageBucket: "vyocolumbus-24979.appspot.com",
  messagingSenderId: "798982643669",
  appId: "1:798982643669:web:75c337f1eda20ab985275c"
};
firebase.initializeApp(firebaseConfig);

function App() {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
