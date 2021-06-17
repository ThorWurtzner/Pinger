import './App.scss';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import Chat from "./Views/Chat/Chat";
import Login from "./Views/Login/Login";

import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDTj6P2_sPnsS96eZ-ynEUvJmcXULL1V5I",
  authDomain: "electron-chat-43469.firebaseapp.com",
  projectId: "electron-chat-43469",
  storageBucket: "electron-chat-43469.appspot.com",
  messagingSenderId: "47783150314",
  appId: "1:47783150314:web:dd3e04cbe478dbbb454d93",
  measurementId: "G-WFV1RR5T52"
})

function App() {
  
  var [ user ] = useAuthState(firebase.auth());

  return (
    <>
      {/* <img className="background" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/789903118624487.608ca2b2b50fd.png" alt="background" /> */}
      <div className="app">
        { user ? <Chat /> : <Login /> }
      </div>
    </>
  );
}

export default App;
