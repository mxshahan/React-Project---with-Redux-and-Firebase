import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAejXrkwbrXkDr2AYAE_XYW0vSwPQDQXBw",
    authDomain: "reactapp99.firebaseapp.com",
    databaseURL: "https://reactapp99.firebaseio.com",
    projectId: "reactapp99",
    storageBucket: "",
    messagingSenderId: "131442717418"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {firebase, googleAuthProvider, facebookAuthProvider, database as default}


