import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
var firebaseui = require('firebaseui');
const firebaseConfig = {
  apiKey: "AIzaSyCpEJlLKZqD3oyL45Vwqa6LVsnQ1goqT6w",
  authDomain: "vyocolumbus-24979.firebaseapp.com",
  projectId: "vyocolumbus-24979",
  storageBucket: "vyocolumbus-24979.appspot.com",
  messagingSenderId: "798982643669",
  appId: "1:798982643669:web:75c337f1eda20ab985275c"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app() // if already initialized, use that one

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/main/a',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

function Sign() {
  return (
    <div className="Sign">
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default Sign;