import React from 'react';
import "./Login.scss";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function Login(props) {
    
    function googleOAuth() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    }

    return (
        <section className="login">
            <h1><img src="./assets/flame.jpg" alt="flame" />Pinger</h1>
            <img className="penguins" src="./assets/logo.png" alt="logo" />
            <button onClick={googleOAuth}>Login with <img src="./assets/google.png" alt="google" /></button>
        </section>
    )
}
