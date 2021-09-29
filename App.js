import "react-native-gesture-handler";
import React, { useState } from "react";
import Home from "./app/screens/HomeScreen";
import { View } from "react-native";
import Navigator from "./routes/homeStack";
import * as firebase from "firebase";
import "firebase/firestore";


export default function App() {
  return <Navigator />;
}
