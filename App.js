import "react-native-gesture-handler";
import React, { useState } from "react";
import Home from "./app/screens/HomeScreen";
import { View } from "react-native";
import Navigator from "./routes/homeStack";
//import { StackNavigator } from 'react-navigation';
//import WelcomeScreen from './app/screens/WelcomeScreen';
//import MapScreen from './app/screens/MapScreen';
//import NavigationScreen from './app/screens/NavigationScreen';
//import SettingsScreen from './app/screens/SettingsScreen';
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXyXraHgu5hZW89RiJCd5MxcR1Ct3HAK4",
  authDomain: "uwamap-cbeb4.firebaseapp.com",
  projectId: "uwamap-cbeb4",
  storageBucket: "uwamap-cbeb4.appspot.com",
  messagingSenderId: "379875741857",
  appId: "1:379875741857:web:1a621c346fc873ff4760e0",
  measurementId: "G-08Y6D94TDZ",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const dbh = firebase.firestore();

dbh.collection("characters").doc("mario").set({
  employment: "plumber",
  outfitColor: "red",
  specialAttack: "fireball",
});

// export default function App() {
//   return <WelcomeScreen />;

export default function App() {
  return <Navigator />;
}

// export default class App extends Component {
//   render() {
//     return (
//       <AppNavigator />
//     );
//   }
// }
