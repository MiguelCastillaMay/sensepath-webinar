import firebase from "firebase/app";
import 'firebase/firestore'
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB488joDMcaD26hoCTnSIfZSAPtDUY_plw",
  authDomain: "sensepath-chat.firebaseapp.com",
  projectId: "sensepath-chat",
  storageBucket: "sensepath-chat.appspot.com",
  messagingSenderId: "594274316407",
  appId: "1:594274316407:web:5750a3bb738e591506d672",
  measurementId: "G-15WJF1JHEF"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
