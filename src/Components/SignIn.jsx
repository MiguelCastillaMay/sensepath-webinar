import firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();

function SignIn() {
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

export default SignIn;
