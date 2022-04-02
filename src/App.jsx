import "./App.css";
import firebase from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "./Components/SignOut";
import SignIn from "./Components/SignIn";
import ChatRoom from "./Components/ChatRoom";

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <SignOut />
      </header>
      <div className="content">
        <div className="video">
          <video
            id="video"
            width="300"
            no-controls="true"
            autoPlay={"autoPlay"}
            muted
          >
            <source
              src="https://firebasestorage.googleapis.com/v0/b/sensepath-chat.appspot.com/o/small.ogv?alt=media&token=0b30d55a-287e-442c-a514-551a841d0c72"
              type="video/ogg"
            />
          </video>
        </div>
        <div className="chat">{user ? <ChatRoom /> : <SignIn />}</div>
      </div>
    </div>
  );
}

export default App;
