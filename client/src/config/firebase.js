const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAejXrkwbrXkDr2AYAE_XYW0vSwPQDQXBw",
    authDomain: "reactapp99.firebaseapp.com",
    databaseURL: "https://reactapp99.firebaseio.com",
    projectId: "reactapp99",
    storageBucket: "",
    messagingSenderId: "131442717418"
};
firebase.initializeApp(config);

const rootRef = firebase.database().ref();
export const dataRef = rootRef.child('speed');
export const timeRef = firebase.database.ServerValue.TIMESTAMP;


