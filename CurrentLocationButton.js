import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
//const WIDTH = Dimensions.get('window').width; //used for alignment
const HEIGHT = Dimensions.get('window').height;
//Notes lets implement centre button onto tours
export const CurrentLocationButton = function (props) {
    //if props.bottom is passed else use 65.
    const bottom = props.bottom ? props.bottom : 65;
    //notify if callback actually passed
    const cb = props.cb ? props.cb : () => console.log('Callback not passed')
    return (
        <View style={[styles.buttoncontainer, { top: HEIGHT - bottom }]}>
            <MaterialIcons
                name='my-location'
                color="#0000FF"
                size={30}
                onPress={() => { cb() }} />
        </View>
    )
}

//add this into existing style sheet.

const styles = StyleSheet.create({
    buttoncontainer: {
        zIndex: 9,
        position: 'absolute',
        width: 45,
        height: 45,
        backgroundColor: '#fff',
        //left: (WIDTH - 70),
        elevation: 7,
        shadowColor: '#000000',
        borderRadius: 50, //circle
        shadowRadius: 5,
        shadowOpacity: 1.0,
        justifyContent: 'space-around',
        alignItems: "center",
    },
})

/*
  centerMap() {
    const { latitude,
      longitude,
      latitudeDelta,
      longitudeDelta } = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    };
    this.map.animateToRegion({
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    })
  }
*/