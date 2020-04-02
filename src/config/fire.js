import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyACsWMm0WD0C2k95r9Zi5DLDfb0DHF9H1o",
    authDomain: "one-receipt-retailer.firebaseapp.com",
    databaseURL: "https://one-receipt-retailer.firebaseio.com",
    projectId: "one-receipt-retailer",
    storageBucket: "one-receipt-retailer.appspot.com",
    messagingSenderId: "815446679807",
    appId: "1:815446679807:web:6149194d99db39571d6cca",
    measurementId: "G-8S1F1HXDDQ"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;
//   firebase.analytics();
