import React from "react";
import { AppLoading } from "expo";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// Fonts:
// import { useFonts, Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium,Montserrat_600SemiBold,
//   Montserrat_700Bold,Montserrat_900Black,} from '@expo-google-fonts/montserrat';
// import { useFonts, Merriweather_300Light, Merriweather_300Light_Italic, Merriweather_400Regular, Merriweather_400Regular_Italic,
//   Merriweather_700Bold, Merriweather_700Bold_Italic, Merriweather_900Black, Merriweather_900Black_Italic } from '@expo-google-fonts/merriweather';
import { useFonts, Merriweather_300Light, Merriweather_300Light_Italic, Merriweather_400Regular, Merriweather_400Regular_Italic,
  Merriweather_700Bold, Merriweather_700Bold_Italic, Merriweather_900Black, Merriweather_900Black_Italic } from '@expo-google-fonts/merriweather';


function HomeScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("MAP");
  };
  const pressHandlerTour = () => {
    navigation.navigate("TOURS");
  };
  const pressHandlerTest = () => {
    navigation.navigate("ABOUT");
  };
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

  return (
    <ImageBackground style={styles.background} imageStyle={{opacity:0.3}} source={require('../assets/rock.jpeg')}>
      <View style={styles.logoContainer}>
        {<Image
          style={styles.logo}
          source={{
            uri: "https://crowdresearch.uwa.edu.au/wp-content/uploads/2015/12/cropped-uwa-crest-512.png",
          }}
        ></Image>}
      </View>

      <View style={styles.buttonsContainer}>
        <Text style={styles.textHome}> HISTORIA </Text>
        <TouchableOpacity style={styles.roundButton} onPress={pressHandler}>
          <Text style={styles.mapText}>GO TO MAP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton} onPress={pressHandlerTour}>
          <Text style={styles.tourText}>TAKE A TOUR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton} onPress={pressHandlerTest}>
          <Text style={styles.testText}>ABOUT PAGE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  ); 
}
export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#ececec",
  },
  logoContainer: {
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 0,
    justifyContent: "flex-end",
  },
  textHome: {
    fontSize: 50,
    textAlign: "center",
    fontFamily: "Merriweather_400Regular",
    letterSpacing: 7,
    paddingBottom: 15,
    alignContent: "center",
  },
  logo: {
    width: 170,
    height: 170,
  },
  roundButton: {
    top: 25,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
  },
  tourText: {
    backgroundColor: "#e2b600",
    color: "black",
    width: "90%",
    overflow: 'hidden',
    marginBottom: "5%",
    borderRadius: 20,
    borderColor: "#202020",
    borderWidth: 3,
    textAlign: "center",
    padding: "3%",
    fontSize: 25,
    alignSelf: "center",
    fontFamily: "Merriweather_400Regular",
    letterSpacing: 1.5,
  },
  testText: {
    backgroundColor: "#265521",
    color: "white",
    width: "90%",
    overflow: 'hidden',
    marginBottom: "15%",
    borderRadius: 20,
    borderColor: "#202020",
    borderWidth: 3,
    textAlign: "center",
    padding: "3%",
    fontSize: 25,
    alignSelf: "center",
    fontFamily: "Merriweather_400Regular",
    letterSpacing: 1.5,
  },
  mapText: {
    backgroundColor: "#27348b",
    color: "white",
    width: "90%",
    borderRadius: 20,
    borderColor: "#202020",
    borderWidth: 3,
    overflow: 'hidden',
    textAlign: "center",
    padding: "3%",
    fontSize: 25,
    marginBottom: "5%",
    alignSelf: "center",
    fontFamily: "Merriweather_400Regular",
    letterSpacing: 1.5,
  },
});
