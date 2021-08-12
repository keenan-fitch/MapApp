import 'react-native-gesture-handler';
import React, {useState} from 'react';
import Home from "./app/screens/HomeScreen";
import { View } from 'react-native';
import Navigator from './routes/homeStack'
//import { StackNavigator } from 'react-navigation';
//import WelcomeScreen from './app/screens/WelcomeScreen';
//import MapScreen from './app/screens/MapScreen';
//import NavigationScreen from './app/screens/NavigationScreen';
//import SettingsScreen from './app/screens/SettingsScreen';

 
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