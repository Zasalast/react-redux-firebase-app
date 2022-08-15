import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "",
    authDomain: "marioplan-970ae.firebaseapp.com",
    databaseURL: "https://marioplan-970ae.firebaseio.com",
    projectId: "marioplan-970ae",
    storageBucket: "marioplan-970ae.appspot.com",
    messagingSenderId: "261334860919",
    appId: "",
    measurementId: "G-GR0BYWC8CK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});
  firebase.analytics();

export default firebase; 
