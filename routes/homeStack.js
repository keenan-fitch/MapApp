// Where we configure the stack navigator
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../app/screens/HomeScreen";
// import SettingsScreen from "../app/screens/SettingsScreen";
import MapScreen from "../app/screens/MapScreen";
import ToursScreen from "../app/screens/ToursScreen.js";
import About from "../app/screens/AboutScreen.js";
import TestScreen from "../app/screens/TestScreen.js";
import CarouselMap from "../app/screens/carourselMap.js";
import TestMapScreen from "../app/screens/TestMapScreen.js";
import BottomSheetScreen from "../app/screens/BottomSheetScreen.js";

const screens = {
  HomeScreen: {
    screen: HomeScreen,
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
  ToursScreen: {
    screen: ToursScreen,
  },
  CarouselMap: {
    screen: CarouselMap,
  },
  BottomSheetScreen: {
    screen: BottomSheetScreen,
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
