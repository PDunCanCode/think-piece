import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyC4IYhDkn13gWOqNwQ_9J-7FGvg3QRTSeo",
    authDomain: "think-piece-c04c9.firebaseapp.com",
    databaseURL: "https://think-piece-c04c9.firebaseio.com",
    projectId: "think-piece-c04c9",
    storageBucket: "think-piece-c04c9.appspot.com",
    messagingSenderId: "239290643883",
    appId: "1:239290643883:web:7740f094bf700909dd4eee",
    measurementId: "G-L5JE059L99"
};

firebase.initializeApp(firebaseConfig);

export default firebase;