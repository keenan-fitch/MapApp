import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function ToursScreen(props) {
    return (
        <ImageBackground style={styles.background}>
            <View style={styles.tourWindow}>
                <TouchableOpacity underlayColor="red">
                    <Image source={require("../assets/royals.png")} ></Image>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image source={require("../assets/treasures.png")} ></Image>
                </TouchableOpacity>
                
            </View>
        
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
        fontFamily: "Helvetica",     
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