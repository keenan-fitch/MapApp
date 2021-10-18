import "react-native-gesture-handler";
import React, { useState } from "react";
import Home from "./app/screens/HomeScreen";
import { View } from "react-native";
import Navigator from "./routes/homeStack";
import * as firebase from "firebase";
import "firebase/firestore";
import { AppLoading } from "expo";
import * as ScreenOrientation from 'expo-screen-orientation';
// import { Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium,Montserrat_600SemiBold,
//   Montserrat_700Bold,Montserrat_900Black,} from '@expo-google-fonts/montserrat';
import { useFonts, Merriweather_300Light, Merriweather_300Light_Italic, Merriweather_400Regular, Merriweather_400Regular_Italic,
  Merriweather_700Bold, Merriweather_700Bold_Italic, Merriweather_900Black, Merriweather_900Black_Italic } from '@expo-google-fonts/merriweather';



export default function App() {

  // Loading all the fonts for use across all screens:
  let [fontsLoaded, error] = useFonts({
    Merriweather_300Light, 
    Merriweather_400Regular, 
    Merriweather_700Bold, 
    Merriweather_900Black,
    Merriweather_300Light_Italic, 
    Merriweather_400Regular_Italic, 
    Merriweather_700Bold_Italic, 
    Merriweather_900Black_Italic,
  });

// Lines below App only functions in Portrait mode (No landscape Orientation)
  React.useEffect(() => {
    lockOrientation()
  }, [])
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
  }
  return <Navigator />;
}
