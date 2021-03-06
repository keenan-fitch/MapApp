import "react-native-gesture-handler";
import React, { useState } from "react";
import Home from "./app/screens/HomeScreen";
import { View } from "react-native";
import Navigator from "./routes/homeStack";
import * as firebase from "firebase";
import "firebase/firestore";
import { AppLoading } from "expo";
import * as ScreenOrientation from 'expo-screen-orientation';


export default function App() {

// Lines below App only functions in Portrait mode (No landscape Orientation)
  React.useEffect(() => {
    lockOrientation()
  }, [])
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
  }
  return <Navigator />;
}
