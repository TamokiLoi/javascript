import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBFuSh2u9LcYbzddi5QkzN5DRkoV9vtlI4",
    authDomain: "notemanagebyreact.firebaseapp.com",
    databaseURL: "https://notemanagebyreact.firebaseio.com",
    projectId: "notemanagebyreact",
    storageBucket: "notemanagebyreact.appspot.com",
    messagingSenderId: "168849409972"
};
firebase.initializeApp(config);
export const noteData = firebase.database().ref('dataForNote')