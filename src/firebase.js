import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
        apiKey: "AIzaSyALvD9LW0kYhrn6Kt7QKHSWJlRGOEGUnmQ",
        authDomain: "clone-e442b.firebaseapp.com",
        projectId: "clone-e442b",
        storageBucket: "clone-e442b.appspot.com",
        messagingSenderId: "1021191357703",
        appId: "1:1021191357703:web:aa691ed6352c6666a1f1a2"
   
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db ,provider};


