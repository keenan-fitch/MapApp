// MarkerWithDetails.js

// This is a component (not a screen) to display information on the map screen
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, Button, Animated, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// function MarkerWithDetails() {


// const users = [
//    {id: 0, title: 'first point', description: '', coordinatets: {lat: 0, long: 0}, showDetails: false},
//    // rest of the data...
//    ]


function MarkerWithDetails({point, onToggle}) {
   const {Latitude, Longitude, Title, Description, showDetails} = point;
   
   return(
      <TouchableOpacity onPress={onToggle}>
         <Marker coordinate={{latitude: Latitude, longitude: Longitude}}/>
         {showDetails && <Details Title={Title} Description={Description}/>}
      </TouchableOpacity>
   );
}


const styles = StyleSheet.create({
  paragraph: {
    margin: 28,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',

  },
  paragraphContainer: {
     backgroundColor: 'white',
     marginHorizontal: "5%",
     alignSelf: 'center'
  },
  plaqueImage: {
     height: 150,
     width: "100%",
     alignSelf: 'center',
  },
  plaqueImageContainer: {
   width: '90%',
   alignSelf: 'center',
   alignContent: 'center',

  },
  expandingView: {
     overflow:'hidden',
     position: 'absolute',
     bottom: 0,
     backgroundColor: "rgba(236, 236, 236, 0.8)",
     width: '100%'
  },
  outerView: {
     height: "100%",
     position: 'relative',
     bottom: 0
  },
  buttonExpand: {
     flex: 1,
     color: 'red',
     position: 'relative',
     justifyContent: 'flex-end',
     bottom: 0,
  },
  buttonContainer: {
     ...StyleSheet.absoluteFillObject,
     position: 'relative',

  },
  touchableButton: {
     height:  50,
     width: "90%",
     backgroundColor: '#808080',
     alignSelf: 'center',
     textAlign: "center",
     textAlignVertical: 'center',
     borderTopLeftRadius: 10,
     borderTopRightRadius: 10
  },
  buttonText: {
     fontSize: 20,
     alignSelf: "center",
     paddingVertical: 15,
     color: 'white'
  },
  arrowLogo: {
   height: 20,
   width: 20,
   opacity: 0.5,
   marginTop: 15,
   alignSelf: 'center'
 },
});

export default MarkerWithDetails;
