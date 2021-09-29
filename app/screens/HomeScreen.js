import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function HomeScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("TestMapScreen");
  };
  const pressHandlerTour = () => {
    navigation.navigate("Tours");
  };
  const pressHandlerTest = () => {
    navigation.navigate("ParisMap");
  };
  
  return (
    <ImageBackground style={styles.background} source={require('../assets/#ececec.png')}
    >
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
          <Text style={styles.testText}>Test</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#ececec",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },

  buttonsContainer: {
    position: "absolute",
    bottom: 0,
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  textHome: {
    // top: 40,
    fontSize: 50,
    textAlign: "center",
    fontFamily: "Futura",
   // fontWeight: "bold",
    letterSpacing: 10,
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
  signup: {
    backgroundColor: "white",
    color: "#3A59FF",
    width: "65%",
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: "18%",
    padding: "2%",
    fontSize: 33,
    marginTop: "70%",
  },
  tourText: {
    backgroundColor: "#e2b600",
    color: "black",
    width: "90%",
    overflow: 'hidden',
    marginBottom: "5%",
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 5,
    textAlign: "center",
    fontWeight: "bold",
    padding: "3%",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Futura",
  },
  testText: {
    backgroundColor: "#265521",
    color: "white",
    width: "90%",
    overflow: 'hidden',
    marginBottom: "15%",
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 5,
    textAlign: "center",
    fontWeight: "bold",
    //marginLeft: '11%',
    padding: "3%",
    fontSize: 25,
    //marginTop: '10%',
    alignSelf: "center",
    fontFamily: "Futura",
  },
  mapText: {
    backgroundColor: "#27348b",
    color: "white",
    width: "90%",
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 5,
    overflow: 'hidden',
    textAlign: "center",
    fontWeight: "bold",
    padding: "3%",
    fontSize: 25,
    marginBottom: "5%",
    alignSelf: "center",
    fontFamily: "Futura",
  },
});
