import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Merriweather_300Light, Merriweather_300Light_Italic, Merriweather_400Regular, Merriweather_400Regular_Italic,
    Merriweather_700Bold, Merriweather_700Bold_Italic, Merriweather_900Black, Merriweather_900Black_Italic } from '@expo-google-fonts/merriweather';
  

function ToursScreen({ navigation }) {
    const pressHandlerScience= () => {
        navigation.navigate("SCIENCE");
      };
    const pressHandlerArt= () => {
        navigation.navigate("ART");
    };
    const pressHandlerPeople= () => {
        navigation.navigate("PEOPLE");
      };
    const pressHandlerNature= () => {
        navigation.navigate("NATURE");
    };
    const pressHandlerLandmarks= () => {
        navigation.navigate("LANDMARKS");
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
        <ImageBackground style={styles.background}>
            <ScrollView style={styles.toursScrollView} directionalLockEnabled={true}>


                <TouchableOpacity style={styles.tourContainer} onPress={pressHandlerPeople}>
                    <ImageBackground style={styles.tourImage} source={require("../assets/people.jpeg")} >
                        <View style={styles.innerFrame}>
                            <Text style={styles.tourText}>HISTORICAL FIGURES</Text>
                        </View>
                    </ImageBackground >
                </TouchableOpacity>

                <TouchableOpacity style={styles.tourContainer} onPress={pressHandlerArt}>
                    <ImageBackground style={styles.tourImage} source={require("../assets/sunsetCrop_small.jpeg")} >
                        <View style={styles.innerFrame}>
                            <Text style={styles.tourText}>ART & SCULPTURES</Text>
                        </View>
                    </ImageBackground >
                </TouchableOpacity>

                <TouchableOpacity style={styles.tourContainer} onPress={pressHandlerScience}>
                    <ImageBackground style={styles.tourImage} source={require("../assets/rock_small.jpeg")} >
                        <View style={styles.innerFrame}>
                            <Text style={styles.tourText}>SCIENCES</Text>
                        </View>
                    </ImageBackground >
                </TouchableOpacity>

                <TouchableOpacity style={styles.tourContainer} onPress={pressHandlerNature}>
                    <ImageBackground style={styles.tourImage} source={require("../assets/sunkenGarden.jpeg")} >
                        <View style={styles.innerFrame}>
                            <Text style={styles.tourText}>NATURE & GARDENS</Text>
                        </View>
                    </ImageBackground >
                </TouchableOpacity>


                <TouchableOpacity style={styles.tourContainer} onPress={pressHandlerLandmarks}>
                    <ImageBackground style={styles.tourImage} source={require("../assets/winthrop_small.jpeg")} >
                        <View style={styles.innerFrame}>
                            <Text style={styles.tourText}>LANDMARK BUILDINGS</Text>
                        </View>
                    </ImageBackground >
                </TouchableOpacity>
                
            </ScrollView>
        </ImageBackground>

    );
}
export default ToursScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#ececec",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#ececec",
    },
    logoContainer: {
        position: 'absolute',
        top: 200,
        alignItems: 'center',
    },
    textHome: {
        top: 30,
        fontSize: 30,   
    },
    tourContainer: {
        flex: 1,
        height: 250,
        width: 380,
        paddingBottom: 15
    },
    logo: {
        width: 150,
        height: 150,
    },
    tourImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        textAlign: "center",
        textAlignVertical: "center",
    },
    toursScrollView: {
        paddingVertical: 20,
        alignContent: "center"
    },
    tourText: {
        fontSize: 50,
        alignSelf: "center",
        textAlignVertical: "center",
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily: "Merriweather_400Regular",
        textAlign: "center",
        borderColor: "black",
        borderRadius: 20,
    },
    innerFrame: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .4)', 
    },
});