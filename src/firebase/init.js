  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyAY6pJCXMWxy_f2TZhn_WruyASqC1aMJ3k",
    authDomain: "ninja-chat-5d8f3.firebaseapp.com",
    projectId: "ninja-chat-5d8f3",
    storageBucket: "ninja-chat-5d8f3.appspot.com",
    messagingSenderId: "914067426314",
    appId: "1:914067426314:web:5c5f98bf4e710f1a8523f3"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()