import firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();

function ChatMessage(props) {
  const [user] = useAuthState(auth);

  const { texto, uid, photoURL, second, id } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  };

  return (
    <div className={`message ${messageClass}`} id={id}>
      <img src={photoURL} />
      <p>
        {texto} <span className="time">{fmtMSS(second)}</span>
      </p>
    </div>
  );
}

export default ChatMessage;
