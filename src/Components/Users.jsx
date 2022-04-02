import SignOut from "./SignOut";
import User from "./User";
import firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const query = firestore.collection("users");
  const [users] = useCollectionData(query, { idField: "id" });

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <SignOut />
        <h3>Usuarios</h3>
      </header>
      <div className="usuarios">
        {users ? users.map((user) => <User key={user.id} user={user}></User>) : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
