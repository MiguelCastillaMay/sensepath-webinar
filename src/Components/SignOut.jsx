import firebase from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth'

const auth = firebase.auth();

function SignOut() {
  const [user] = useAuthState(auth);
  const signOut = () => {
    auth.signOut();
  }
  return (
    auth.currentUser && <button onClick={signOut}>Sign Out</button>
  );
}

export default SignOut;
