import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCRQTLcSnFhLWQDS_8D8JfgxUEhYOTAX9k",
    authDomain: "linkedin-clone-49826.firebaseapp.com",
    projectId: "linkedin-clone-49826",
    storageBucket: "linkedin-clone-49826.appspot.com",
    messagingSenderId: "4332668326",
    appId: "1:4332668326:web:a2c258df7a1f7c2366fb67"
  };

  //This special line of code here connects everything
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //gets the firestore database
  const db = firebaseApp.firestore();

  //we want to use firebase authentication
  const auth = firebase.auth();
  export { db, auth}