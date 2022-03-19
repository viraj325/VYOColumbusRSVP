import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCpEJlLKZqD3oyL45Vwqa6LVsnQ1goqT6w",
  authDomain: "vyocolumbus-24979.firebaseapp.com",
  projectId: "vyocolumbus-24979",
  storageBucket: "vyocolumbus-24979.appspot.com",
  messagingSenderId: "798982643669",
  appId: "1:798982643669:web:75c337f1eda20ab985275c"
};
const app = initializeApp(firebaseConfig);

function App() {
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
