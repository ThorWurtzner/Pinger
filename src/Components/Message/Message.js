import React from 'react';
import "./Message.scss";
import firebase from "firebase/app";

export default function Message({ text, uid, portrait, timestamp, user }) {
    
    var msgSender = uid === firebase.auth().currentUser.uid ? "sent" : "received";

    return (
        <div className={`message ${msgSender}`}>
            <img src={portrait} alt="user portrait" />
            <p>{text}</p>
            <span>{user}</span>
        </div>
    )
}
