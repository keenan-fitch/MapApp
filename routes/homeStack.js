// Where we configure the stack navigator
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../app/screens/HomeScreen";
// import SettingsScreen from "../app/screens/SettingsScreen";
import MapScreen from "../app/screens/MapScreen";
import Tours from "../app/screens/ToursScreen.js";
import About from "../app/screens/AboutScreen.js";
import TestScreen from "../app/screens/TestScreen.js";
import CarouselMap from "../app/screens/carourselMap.js";
import TestMapScreen from "../app/screens/TestMapScreen.js";
import BottomSheetScreen from "../app/screens/BottomSheetScreen.js";
import mapBottomSheet from "../app/screens/mapBottomSheet.js";
import ParisMap from "../app/screens/parisMap.js";


const screens = {
  Home: {
    screen: Home,
  },
  TestScreen: {
    screen: TestScreen,
  },
  TestMapScreen: {
    screen: TestMapScreen,
  },
  About: {
    screen: About,
  },
  MapScreen: {
    screen: MapScreen,
  },
  Tours: {
    screen: Tours,
  },
  CarouselMap: {
    screen: CarouselMap,
  },
  BottomSheetScreen: {
    screen: BottomSheetScreen,
  },
  ParisMap: {
    screen: ParisMap,
  }

};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
