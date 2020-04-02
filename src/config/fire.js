import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "API Key",
    authDomain: "one-receipt-retailer.firebaseapp.com",
    databaseURL: "https://one-receipt-retailer.firebaseio.com",
    projectId: "one-receipt-retailer",
    storageBucket: "one-receipt-retailer.appspot.com",
    messagingSenderId: " messagingSenderId",
    appId: "app ID",
    measurementId: "G-8S1F1HXDDQ"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;
//   firebase.analytics();
