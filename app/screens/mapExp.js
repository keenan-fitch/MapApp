import * as firebase from "firebase";
import "firebase/firestore";
import "react-native-gesture-handler";
import React, { useState, useRef, Component, useEffect, event } from "react";
import {StyleSheet,View,Text, FlatList, SafeAreaView, Animated, Dimensions, Image, ScrollView } from "react-native";
import { render } from "react-dom";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mapStyle from "../../constants/mapStyle.json";
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

function MapExp() {

   const [collapsed, setCollapsed] = useState(true);
   const [maxLines, setMaxLines] = useState(2);
   const animationHeight = useRef(new Animated.Value(0)).current;
   const toggleCollapsed = () => {
     setCollapsed(!collapsed);
   };
   const collapseView = () => {
       Animated.timing(animationHeight, {
         duration: 1000,
         toValue: 70,
         useNativeDriver: false,
       }).start();
   }
   const expandView = () => {
       setMaxLines(null)
       Animated.timing(animationHeight, {
         duration: 1000,
         toValue: 500,
         useNativeDriver: false,
       }).start();
   }
   useEffect(() => {
     if (collapsed) {
       collapseView()
     } else {
       expandView()
     }
   }, [collapsed]);
   
   const [users, setUsers] = useState([]); // Initial empty array of users
   const windowHeight = Dimensions.get("window").height;

   const [plaque, setPlaque] = useState([]);

   const pressMarker = (i) => {
      setPlaque(i);
      console.log(i)
      return(plaque)
    };

   useEffect(() => {
      const dbh = firebase.firestore();
      dbh
      .collection("DB_LATEST_OCT13")
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
        initialRegion={{ latitude: -31.98093734685109, longitude: 115.81848976510486, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
        r
        style={{ flex: 1, minHeight: windowHeight }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        showsUserLocation={true}
      >
        {users.map((i, index) => (
          <Marker key={index} onPress = {() => pressMarker(i)}
            coordinate={{ latitude: i.Latitude, longitude: i.Longitude }}
            title={i.Title} 
          />
        ))}
      </MapView>

      <View style={styles.expandingView}>
         <TouchableOpacity style={styles.touchableButton } onPress={toggleCollapsed}>
            <Text style={styles.plaqueTitle}>{plaque.PreviewTitle}</Text>
            <Image source={require("../assets/upArrowWhite.png")} style={styles.arrowLogo}></Image>
         </TouchableOpacity>
         <Animated.View style={{maxHeight: animationHeight}}>
            <View style={styles.plaqueImageContainer}>
               <Image style={styles.plaqueImage} source={require("../assets/sunsetCrop.png")}  />
               {/* <Image style={styles.plaqueImage} source={uri: {plaque.ImageUrl}}  /> */}
            </View>
            <ScrollView style={styles.paragraphContainer}>
               <Text style={styles.plaqueTitleScrollview}>{plaque.Title}</Text>
               <Text style={styles.paragraphLeft}>{plaque.Description}</Text>
               <Text style={styles.paragraphLeft}>{plaque.Location}</Text>
               {/* <Text style={styles.paragraphLeft}>{plaque.Quadrant}</Text>
               <Text style={styles.paragraphLeft}>{plaque.Year}</Text> */}
            </ScrollView>
         </Animated.View>
      </View>
    </>
  );
}

export default MapExp;

const styles = StyleSheet.create({
   container: {
     flex: 1,
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
       margin: 28,
       fontSize: 14,
       fontWeight: 'bold',
       alignSelf: 'center',
     },
   paragraphLeft: {
      margin: 28,
      fontSize: 14,
      alignSelf: 'flex-start',
    },
     paragraphContainer: {
        backgroundColor: 'white',
        marginHorizontal: "5%",
        alignSelf: 'center',
        width: "90%",
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
        borderTopRightRadius: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
     },
     buttonText: {
        fontSize: 20,
        alignSelf: "center",
        paddingVertical: 15,
        color: 'white'
     },
     arrowLogo: {
      position: 'relative',
      height: 20,
      width: 20,
      opacity: 0.5,
      marginRight: 20,

      alignSelf: 'center',
      // alignContent: 'flex-start',
    },
    plaqueTitle: {
      color: 'white',
      fontSize: 20,
      marginTop: 10,
      marginStart: 25,
      alignSelf: 'flex-start'
    },
    plaqueTitleScrollview: {
      color: 'black',
      fontSize: 28,
      marginTop: 20,
      marginStart: 25,
      alignSelf: 'flex-start'
    },
   });