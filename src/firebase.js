import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDANQkplsoCfMI1QYqNTxPRMLcEWx0KNh0",
    authDomain: "tik-tok-clone-1fb0b.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-1fb0b.firebaseio.com",
    projectId: "tik-tok-clone-1fb0b",
    storageBucket: "tik-tok-clone-1fb0b.appspot.com",
    messagingSenderId: "61726973054",
    appId: "1:61726973054:web:2ecd6ff3c14baa4a8acc2f"
  }; 
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db =firebaseApp.firestore();

  export default db;