// firebase.js
import * as firebase from "firebase";
import "firebase/firestore";
import "react-native-gesture-handler";
import React, { useState, Component, useEffect } from "react";
import 'firebase/storage';


const firebaseConfig = {
   apiKey: "XXXXXXXXXXXX"
   authDomain: "XXXXXXXXXXXX",
   projectId: "XXXXXXXXXXXX",
   storageBucket: "XXXXXXXXXXXX",
   messagingSenderId: "XXXXXXXXXXXX",
   appId: "XXXXXXXXXXXX",
   measurementId: "XXXXXXXXXXXX",
};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
} else {
firebase.app(); 
}
