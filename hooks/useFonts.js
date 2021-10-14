import * as Font from "expo-font";
// import {Montserrat-Bold} from "..app"
// import * from "../app/assets/Fonts";

export default useFonts = async () => {
   await Font.loadAsync({
      "Montserrat-Bold": require("../app/assets/Fonts/Montserrat-Bold.ttf"),
    });
};