import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtuj3Z6Zxg8OsTwSJsPdjDAzx1So2yBks",
  authDomain: "trip-guide-1d47c.firebaseapp.com",
  databaseURL: "https://trip-guide-1d47c.firebaseio.com",
  projectId: "trip-guide-1d47c",
  storageBucket: "trip-guide-1d47c.appspot.com",
  messagingSenderId: "533432975650",
  appId: "1:533432975650:web:b2617cd2dbe6a02696657b",
};

//initialize firebaseapp

const firebaseApp = firebase.initializeApp(firebaseConfig);
//accessing a database
const db = firebaseApp.firestore();
//accesing a auth
const auth = firebaseApp.auth();

export default db;
