import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
    // backgroundColor:'black',
    flex: 1,
    height: '100%',
    // resizeMode: 'contain',
    // justifyContent: "center",
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
    // top: 40,
    fontSize: 50,
    // color: 'white',
    // textShadowColor: "white",
    // textShadowRadius: 5,
    textAlign: "center",
    fontFamily: "Palatino",
    fontWeight: '900',
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
    // 
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
    fontWeight: "500",
    alignSelf: "center",
    fontFamily: "Palatino",
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
    fontWeight: "500",
    padding: "3%",
    fontSize: 25,
    alignSelf: "center",
    fontFamily: "Palatino",
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
    fontWeight: "500",
    padding: "3%",
    fontSize: 25,
    marginBottom: "5%",
    alignSelf: "center",
    fontFamily: "Palatino",
    letterSpacing: 1.5,
  },
});
