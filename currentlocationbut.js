import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const currentlocationbut = function (props) {
    //if props.bottom is passed else use 65.
    const bottom = props.bottom ? props.bottom : 65;
    //notify if callback actually passed
    const cb = props.cb ? props.cb : () => console.log('Callback not passed')
    return (
        <View style={[styles.container, { top: HEIGHT - bottom }]}>
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
    container: {
        zindex: 9,
        position: 'absolute',
        width: 45,
        height: 45,
        backgroundColor: '#fff',
        left: WIDTH - 60,
        elevation: 7,
        shadowColor: '#000000',
        borderRadius: 50,
        shadowRadius: 5,
        shadowOpacity: 1.0,
        justifyContent: 'space-around',
        alignItems: "center",
    },
})