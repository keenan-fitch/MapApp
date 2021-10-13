// ## Simple map Sceen!


import * as firebase from "firebase";
import "firebase/firestore";
import "react-native-gesture-handler";
import React, { useState, useRef, Component, useEffect, event } from "react";
import {StyleSheet,View,Text, FlatList, SafeAreaView, Animated, Dimensions,Image } from "react-native";
import { render } from "react-dom";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mapStyle from "../../constants/mapStyle.json";
import CollapseView from '../screens/ExpandingView';
import { TouchableOpacity } from 'react-native-gesture-handler';


const firebaseConfig = {
  apiKey: "AIzaSyDXyXraHgu5hZW89RiJCd5MxcR1Ct3HAK4",
  authDomain: "uwamap-cbeb4.firebaseapp.com",
  projectId: "uwamap-cbeb4",
  storageBucket: "uwamap-cbeb4.appspot.com",
  messagingSenderId: "379875741857",
  appId: "1:379875741857:web:1a621c346fc873ff4760e0",
  measurementId: "G-08Y6D94TDZ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

function MapPage() {
   
   const [users, setUsers] = useState([]); // Initial empty array of users
   const windowHeight = Dimensions.get("window").height;

   const [plaque, setPlaque] = useState([]);

   const pressMarker = (i, title) => {
      console.log(i.Title);
      console.log(i.Description);
      // setPlaque(i.Title);
    };

    renderSheetItem = ({ item }) =>
      <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Image style={styles.cardImage} source={item.image} />
      </View>

   useEffect(() => {
      const dbh = firebase.firestore();
      dbh
      .collection("Plaques_SmallDB")
      .get()
      .then((querySnapshot) => {
         const users = [];
         
         querySnapshot.forEach((documentSnapshot) => {
            users.push({
               ...documentSnapshot.data(),
               key: documentSnapshot.id,
            });
         });
         setUsers(users);
      });
   }, []);

   return (
      <>
      <MapView
        initialRegion={{
          latitude: -31.98093734685109,
          longitude: 115.81848976510486,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        r
        style={{ flex: 1, minHeight: windowHeight }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        showsUserLocation={true}
      >
        {users.map((i, index) => (
          <Marker
            key={index}
            onPress = {() => pressMarker(i)}
            coordinate={{
              latitude: i.Latitude,
              longitude: i.Longitude,
            }}
            title={i.Title}
            description={i.Description}
          />
        ))}
      </MapView>

      <View style={styles.expandingView}>
         <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>{plaque}</Text>
            <Text>TESTING TEXT!!</Text>
         </View>
      </View>

    </>
  );
}

export default MapPage;

const styles = StyleSheet.create({
   container: {
     flex: 1,
    //  justifyContent: 'center',
     backgroundColor: '#ecf0f1',
     padding: 8,
   },
   outerScreen: {
      ...StyleSheet.absoluteFillObject,
   },
   mapStyle: {
    ...StyleSheet.absoluteFillObject,
   },
   expandContainer: {
    ...StyleSheet.absoluteFillObject,
   },
   paragraph: {
      //   ...StyleSheet.absoluteFillObject,
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