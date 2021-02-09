import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyDlL6NYEi0x7nla6mouxfDDgmndMTPoDr8",
    authDomain: "login-80834.firebaseapp.com",
    projectId: "login-80834",
    storageBucket: "login-80834.appspot.com",
    messagingSenderId: "254141067909",
    appId: "1:254141067909:web:be7183f949da109fd1afec",
    measurementId: "G-XGTR9N658Z"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default fire;