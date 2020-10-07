import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 export const  firebaseConfig = {
    apiKey: "AIzaSyDCEvVeLzWDRCTPGq1YCnaMcf6sgCmTJvM",
    authDomain: "reacp-app-curso.firebaseapp.com",
    databaseURL: "https://reacp-app-curso.firebaseio.com",
    projectId: "reacp-app-curso",
    storageBucket: "reacp-app-curso.appspot.com",
    messagingSenderId: "211790184124",
    appId: "1:211790184124:web:1707d508f5085378731ab9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();
  /* si me quiero autenticar con twitter haria otra y es igual, todo esto es codigo de firebase no de react */
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  /* voy a exportar todo esto por si necesito usarlo en orra parte */
  export {
      db,
      googleAuthProvider,
      firebase
  }