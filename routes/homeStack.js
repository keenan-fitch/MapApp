// Where we configure the stack navigator
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../app/screens/HomeScreen";
import SettingsScreen from "../app/screens/SettingsScreen";
import MapScreen from "../app/screens/MapScreen";
import ToursScreen from "../app/screens/ToursScreen.js";
import WelcomeScreen from "../app/screens/WelcomeScreen.js";
import TestScreen from "../app/screens/TestScreen.js";
import CarouselMap from "../app/screens/CarouselMap.js";

const screens = {
  HomeScreen: {
    screen: HomeScreen,
  },
  TestScreen: {
    screen: TestScreen,
  },
  SettingsScreen: {
    screen: SettingsScreen,
  },
  MapScreen: {
    screen: MapScreen,
  },
  ToursScreen: {
    screen: ToursScreen,
  },
  carouselMapScreen: {
    screen: CarouselMap,
  },
  WelcomeScreen: {
    screen: WelcomeScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
