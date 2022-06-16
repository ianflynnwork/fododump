import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAzrmxcRpQSEwRSB_m0TPgXoGPC5VWtszc",
    authDomain: "ninja-firegram-1e4ea.firebaseapp.com",
    projectId: "ninja-firegram-1e4ea",
    storageBucket: "ninja-firegram-1e4ea.appspot.com",
    messagingSenderId: "67422912733",
    appId: "1:67422912733:web:a0dcf3e91e30ceec879b34"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };