import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2LOAEIC3mNtDCbgJtucb19DRWXGv_kHk",
    authDomain: "clone-3bab9.firebaseapp.com",
    databaseURL: "https://clone-3bab9.firebaseio.com",
    projectId: "clone-3bab9",
    storageBucket: "clone-3bab9.appspot.com",
    messagingSenderId: "253653656160",
    appId: "1:253653656160:web:ebb9fb0342616da8d61905",
    measurementId: "G-8MLB4CX6X0"
});


const auth = firebase.auth();

export {auth};