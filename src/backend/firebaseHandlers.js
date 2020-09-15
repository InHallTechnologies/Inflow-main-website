import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCefkksGYNZDzF79yLr2Js9sOrp1K4SaTg",
  authDomain: "inflow-logistiks.firebaseapp.com",
  databaseURL: "https://inflow-logistiks.firebaseio.com",
  projectId: "inflow-logistiks",
  storageBucket: "inflow-logistiks.appspot.com",
  messagingSenderId: "658256723194",
  appId: "1:658256723194:web:48a474eac1d1c356479d43",
  measurementId: "G-Z2L9626J7L",
};

firebase.initializeApp(firebaseConfig);

export const firebaseDatabase = firebase.database();
