import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdQY75N_9srVla8ZPSaGgipaqqL9OdmKc",
  authDomain: "sanjudeveloper01.firebaseapp.com",
  projectId: "sanjudeveloper01",
  storageBucket: "sanjudeveloper01.appspot.com",
  messagingSenderId: "392580397615",
  appId: "1:392580397615:web:1ed22def7feee42757e4da",
  measurementId: "G-88PVSXCZ07"
};

// const db = null;

// try {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
// }
// catch (e) {
//   console.log(e)
// }

export default db;