//npm install firebase@8.2.3

import firebase from "firebase";
require("@firebase/firestore");



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
