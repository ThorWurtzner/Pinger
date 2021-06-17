import React, { useEffect, useRef, useState } from 'react';
import "./Chat.scss";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import Message from "../../Components/Message/Message";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Chat(props) {

    useEffect(() => {
        dummy.current.scrollIntoView({ behavior: "smooth" });
    })
    

    var [ user ] = useAuthState(firebase.auth());

    var messagesReference = firebase.firestore().collection("messages");
    var query = messagesReference.orderBy("timeStamp");
    var [messages] = useCollectionData(query, { idField:"id" });

    var [value, setValue] = useState("");
    var dummy = useRef();

    async function writeToDatabase(event) {
        event.preventDefault();

        await messagesReference.add({
            text: value,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            uid: firebase.auth().currentUser.uid,
            photoURL: firebase.auth().currentUser.photoURL,
            displayName: firebase.auth().currentUser.displayName
        })

        setValue("");

        dummy.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section className="chat">
            <header className="chatHeader">
                <p>Logged in as {user.displayName}</p>
                <button onClick={() => firebase.auth().signOut()}>Sign out</button>
            </header>

            <main className="chatMessages">
                {messages && messages.map(msg => <Message key={msg.id} text={msg.text} uid={msg.uid} portrait={msg.photoURL} timestamp={msg.timeStamp} user={msg.displayName} />)}
                <div style={{height: "0"}} ref={dummy}></div>
            </main>

            <footer className="chatFooter">
                <form onSubmit={writeToDatabase}>
                    <i class="fas fa-plus-circle"></i>
                    <input value={value} onChange={event => setValue(event.target.value)} maxLength="200" />
                    <button type="submit">Send</button>
                </form>
            </footer>
        </section>
    )
}
