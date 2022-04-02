import firebase from "./firebase";

const dbMessages = firebase.firestore().collection('messages')
const dbUsers = firebase.firestore().collection('users')

class MessagesDataService {
    getMessages() {
        return dbMessages.get();
    }

    messagesByUser(uid) {
        return dbMessages.where('uid', '==', uid).get();
    }

    addMessage(formValue, displayName, email, photoURL, uid, currentSecond) {
        return dbMessages.add({
            texto: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            second: currentSecond,
            uid,
            photoURL,
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            // this.getMessagesCount(uid)
            // console.log(messagesCount)
            this.addUser(displayName, email, photoURL, uid);
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });;
    }

    getMessagesCount(uid) {
        dbMessages.where("uid", "==", uid).get().then(snapshot => {
            return snapshot.size
        })
    }

    addUser(displayName, email, photoURL, uid) {
        dbUsers.doc(uid).set({
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            uid: uid,
            // messagesCount: messagesCount
        }).then(() => {
            console.log("Document successfully written!");
        })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }

    getUsers() {
        return dbUsers.get();
    }
}

export default new MessagesDataService();