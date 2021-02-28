import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpbIQ549Wz-efwfUYU2fKmSys9C3chHWY",
  authDomain: "facebook-clone-44829.firebaseapp.com",
  projectId: "facebook-clone-44829",
  storageBucket: "facebook-clone-44829.appspot.com",
  messagingSenderId: "448622279898",
  appId: "1:448622279898:web:10a320899d39c83ce979e3",
  measurementId: "G-1SZ1JVSYV8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;