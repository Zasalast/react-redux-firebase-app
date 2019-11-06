import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDcgkseYtbDSII17elZ8VRIURnhavdwZ10",
    authDomain: "marioplan-970ae.firebaseapp.com",
    databaseURL: "https://marioplan-970ae.firebaseio.com",
    projectId: "marioplan-970ae",
    storageBucket: "marioplan-970ae.appspot.com",
    messagingSenderId: "261334860919",
    appId: "1:261334860919:web:e32f7c2ac889b26c25f272",
    measurementId: "G-GR0BYWC8CK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});
  firebase.analytics();

export default firebase;