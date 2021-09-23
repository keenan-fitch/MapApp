import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function ToursScreen({ navigation }) {
    const pressHandlerMapTest = () => {
        navigation.navigate("TestMapScreen");
      };
    return (
        <ImageBackground style={styles.background}>
            {/* <View style={styles.tourWindow}> */}
            <ScrollView>

                <TouchableOpacity underlayColor="red" onPress={pressHandlerMapTest}>
                    <Image source={require("../assets/royals.png")} ></Image>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image source={require("../assets/treasures.png")} ></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require("../assets/plaqueImages/sunset.png")} ></Image>
                </TouchableOpacity>
                
            </ScrollView>
            {/* </View> */}
        </ImageBackground>

    );
}
export default ToursScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "black",
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
    tourWindow: {
        //position: 'absolute',
        //flex: 1,
       // top: 200,
        //alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
});