import firebase from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";

import ChatMessage from "./ChatMessage";
import MessagesDataService from "../MessagesDataService";

const firestore = firebase.firestore();
const auth = firebase.auth();

function ChatRoom() {
  const [user] = useAuthState(auth);
  const query = firestore.collection("messages").orderBy("second");
  const [messages] = useCollectionData(query, { idField: "id" });
  // const [get, setGet] = useState(true)
  // if (get) {
  //   MessagesDataService.getMessages().then(snapshot => {
  //     snapshot.forEach(doc => {
  //       console.log(doc.data())
  //     })
  //   });
  //   setGet(false)
  // }

  const [formValue, setFormValue] = useState("");

  const [currentSecond, setCurrentSecond] = useState(0);

  const video = document.getElementById("video");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSecond(Math.floor(video.currentTime));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // const [storeMessages, setStoreMessages] = useState([]);

  // if (messages) {
  //   messages
  //     .filter((msg) => msg.second == currentSecond)
  //     .forEach((msg) => {
  //       const exist = storeMessages.filter(
  //         (storeMessage) => storeMessage === msg
  //       );
  //       if (exist.length == 0) {
  //         setStoreMessages([...storeMessages, msg]);
  //       }
  //     });
  // }

  const sendMessage = (e) => {
    e.preventDefault();

    const { displayName, email, uid, photoURL } = auth.currentUser;

    if (formValue !== "")
      MessagesDataService.addMessage(
        formValue,
        displayName,
        email,
        photoURL,
        uid,
        currentSecond
      );
    else console.log("Primero escribe algo porfas");

    setFormValue("");
  };

  const objDiv = document.getElementById("messages");
  if (objDiv) objDiv.scrollTop = objDiv.scrollHeight;

  return (
    <>
      <div id="messages">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">
          <img src={require("../images/send.png")} alt="" />
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
