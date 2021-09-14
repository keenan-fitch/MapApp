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
    navigation.navigate("MapScreen");
  };
  const pressHandlerTour = () => {
    navigation.navigate("ToursScreen");
  };
  const pressHandlerTest = () => {
    navigation.navigate("carouselMapScreen");
  };
  return (
    <ImageBackground
      style={styles.background}
      //source={require("./assets/gradient_bg.png")}
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTfwdWoZixKTatNicGmIV-u-wpPnpS2voaw&usqp=CAU",
      }}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://crowdresearch.uwa.edu.au/wp-content/uploads/2015/12/cropped-uwa-crest-512.png",
          }}
        ></Image>
        <Text style={styles.textHome}> A Map in an App! </Text>
      </View>

      <TouchableOpacity style={styles.roundButton} onPress={pressHandler}>
        <Text style={styles.mapText}>Go to Map!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.roundButton} onPress={pressHandlerTour}>
        <Text style={styles.tourText}>Take a tour!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.roundButton} onPress={pressHandlerTest}>
        <Text style={styles.testText}>Go Test Screen</Text>
      </TouchableOpacity>
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
    top: 120,
    alignItems: "center",
  },
  textHome: {
    top: 30,
    fontSize: 30,
    // fontFamily: "Helvetica",
  },
  logo: {
    width: 150,
    height: 150,
  },
  roundButton: {
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
    width: "100%",
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
    //marginLeft: '11%',
    padding: "5%",
    fontSize: 27,
    //marginTop: '10%',
    alignSelf: "center",
  },
  testText: {
    backgroundColor: "#265521",
    color: "white",
    width: "100%",
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
    //marginLeft: '11%',
    padding: "5%",
    fontSize: 27,
    //marginTop: '10%',
    alignSelf: "center",
  },
  mapText: {
    backgroundColor: "#27348b",
    color: "white",
    width: "100%",
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
    //marginLeft: '11%',
    padding: "5%",
    fontSize: 27,
    marginTop: "10%",
    alignSelf: "center",
  },
});
