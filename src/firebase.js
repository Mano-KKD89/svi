import firebase from 'firebase';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyAWZ2C92O-ntS-ntmYcOkAVEpfE5NFi7Q8",
    authDomain: "sreenevasa-infotech.firebaseapp.com",
    databaseURL: "https://sreenevasa-infotech.firebaseio.com",
    projectId: "sreenevasa-infotech",
    storageBucket: "sreenevasa-infotech.appspot.com",
    messagingSenderId: "207667061064",
    appId: "1:207667061064:web:38216affcbeb8b34"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {
    storage, fire as default
}