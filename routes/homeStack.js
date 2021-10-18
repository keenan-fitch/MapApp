// Where we configure the stack navigator
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HOME from "../app/screens/HomeScreen";
// import MapScreen from "../app/screens/MapScreen";
import TOURS from "../app/screens/ToursScreen.js";
import ABOUT from "../app/screens/AboutScreen.js";
import MAP from "../app/screens/mapExp.js";

/// Importing all the tour screens:
import ART from "../app/screens/TourScreens/ArtScuplturesTour.js";
import PEOPLE from "../app/screens/TourScreens/ImportantPeopleTour.js";
import LANDMARKS from "../app/screens/TourScreens/LandmarkBuldingsTour.js";
import NATURE from "../app/screens/TourScreens/NatureGarensTour.js";
import SCIENCE from "../app/screens/TourScreens/ScienceTour.js";


const screens = {
  HOME: {
    screen: HOME,
  },
  MAP: {
    screen: MAP,
  },
  TOURS: {
    screen: TOURS,
  },
  ABOUT: {
    screen: ABOUT,
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
  NATURE: {
    screen: NATURE,
  },
  SCIENCE: {
    screen: SCIENCE,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
