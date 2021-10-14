// Where we configure the stack navigator
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HOME from "../app/screens/HomeScreen";
import MapScreen from "../app/screens/MapScreen";
import TOURS from "../app/screens/ToursScreen.js";
import ABOUT from "../app/screens/AboutScreen.js";

// Importing Temporary Screens
import CarouselMap from "../app/screens/carourselMap.js";
import TestMapScreen from "../app/screens/TestMapScreen.js";
import BottomSheetScreen from "../app/screens/BottomSheetScreen.js";
import ParisMap from "../app/screens/parisMap.js";
import cardView from "../app/screens/cardView.js";
import simpleExpand from "../app/screens/simpleExpand.js";
import MAP from "../app/screens/mapExp.js";
import ExploreScreen from "../app/screens/foodTest.js";
import newMap from "../app/screens/newMap.js";

/// Importing all the tour screens:
import ART from "../app/screens/TourScreens/ArtScuplturesTour.js";
import PEOPLE from "../app/screens/TourScreens/ImportantPeopleTour.js";
import LANDMARKS from "../app/screens/TourScreens/LandmarkBuldingsTour.js";
import MUSIC from "../app/screens/TourScreens/MusicPerformanceTour.js";
import NATURE from "../app/screens/TourScreens/NatureGarensTour.js";
import SCIENCE from "../app/screens/TourScreens/ScienceTour.js";


const screens = {
  HOME: {
    screen: HOME,
  },
  TestMapScreen: {
    screen: TestMapScreen,
  },
  ABOUT: {
    screen: ABOUT,
  },
  MapScreen: {
    screen: MapScreen,
  },
  TOURS: {
    screen: TOURS,
  },
  CarouselMap: {
    screen: CarouselMap,
  },
  BottomSheetScreen: {
    screen: BottomSheetScreen,
  },
  ParisMap: {
    screen: ParisMap,
  },
  ART: {
    screen: ART,
  },
  PEOPLE: {
    screen: PEOPLE,
  },
  LANDMARKS: {
    screen: LANDMARKS,
  },
  MUSIC: {
    screen: MUSIC,
  },
  NATURE: {
    screen: NATURE,
  },
  SCIENCE: {
    screen: SCIENCE,
  },
  cardView: {
    screen: cardView,
  },
  simpleExpand : {
    screen: simpleExpand,
  },
  MAP: {
    screen: MAP,
  },
  ExploreScreen: {
    screen: ExploreScreen,
  },
  // BasicMap: {
  //   screen: MapPage,
  // },
  newMap: {
    screen: newMap,
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
