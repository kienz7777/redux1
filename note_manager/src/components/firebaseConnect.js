import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBS1Eg5aUMQAQ3SfNjgfvXRJcRVn-mrXec",
    authDomain: "notereactjs-66a55.firebaseapp.com",
    databaseURL: "https://notereactjs-66a55.firebaseio.com",
    projectId: "notereactjs-66a55",
    storageBucket: "notereactjs-66a55.appspot.com",
    messagingSenderId: "1090766768207",
    appId: "1:1090766768207:web:70c79071a93c12229fc23a",
    measurementId: "G-3NPKE9PY13"
  };

firebase.initializeApp(firebaseConfig);

export const noteData = firebase.database().ref('dataForNote')