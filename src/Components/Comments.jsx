import { useParams } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "../firebase";
import Comment from "./Comment";

const firestore = firebase.firestore();

function Comments() {
  const { uid } = useParams();

  const queryMessages = firestore
    .collection("messages")
    .where("uid", "==", uid);
  const [messages] = useCollectionData(queryMessages, { idField: "id" });

  const queryUser = firestore.collection("users").where("uid", "==", uid);
  const [user] = useCollectionData(queryUser);

  return (
    <div className="App">
      <header>
        {user ? <img src={user[0].photoURL} /> : "Loading..."}
        {user ? <h3>Comentarios de {user[0].displayName}</h3> : "Loading..."}
      </header>
      <div className="comments">
        {messages &&
          messages
            .sort((a, b) => a.second - b.second)
            .map((msg) => <Comment key={msg.id} msg={msg}></Comment>)}
      </div>
    </div>
  );
}

export default Comments;
