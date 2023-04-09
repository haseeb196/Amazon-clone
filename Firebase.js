import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKHZNSiWautzsDRM2dQl2x10BKA5W5r_w",
  authDomain: "clone-2877d.firebaseapp.com",
  projectId: "clone-2877d",
  storageBucket: "clone-2877d.appspot.com",
  messagingSenderId: "431388528559",
  appId: "1:431388528559:web:cf80e54be365e4e847a95a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();
