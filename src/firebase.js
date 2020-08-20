import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAkNY6TCMv0ac87-ArYAO3Y1Oig6ROqdt0",
  authDomain: "form-184ef.firebaseapp.com",
  databaseURL: "https://form-184ef.firebaseio.com",
  projectId: "form-184ef",
  storageBucket: "form-184ef.appspot.com",
  messagingSenderId: "634735808979",
  appId: "1:634735808979:web:cde27f41aa731465cf1f26",
  measurementId: "G-BET9XN4D6C"
  }; 
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;