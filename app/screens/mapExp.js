import * as firebase from "firebase";
import "firebase/firestore";
import "react-native-gesture-handler";
import React, { useState, useRef, Component, useEffect, event } from "react";
import {StyleSheet,View,Text, FlatList, SafeAreaView, Animated, Dimensions, Image, ScrollView } from "react-native";
import { render } from "react-dom";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mapStyle from "../../constants/mapStyle.json";
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_900Black } from '@expo-google-fonts/montserrat';


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

function Map() {

   const [collapsed, setCollapsed] = useState(true);
   const [maxLines, setMaxLines] = useState(2);
   const animationHeight = useRef(new Animated.Value(0)).current;
   const toggleCollapsed = () => {
     setCollapsed(!collapsed);
   };
   const collapseView = () => {
       Animated.timing(animationHeight, {
         duration: 1000,
         toValue: 0,
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

   // const state = {
   //    plaque: {
   //       PreviewTitle: "Select A Marker.",
   //       Description: "Press on a marker to get plaque information"
   //    },
   // };

   const initialState = {
      "Description": "Press on a marker to get information about a plaque.",
      "PreviewTitle": "Select A Marker",
      "Title": "Select A Marker",
    }

   const [plaque, setPlaque] = useState(initialState);


   const pressMarker = (i) => {
      setPlaque(i);
      // console.log(i.ImageUrl)
      // Image.getSize(plaque.ImageUrl, (width, height) => {this.setState({width, height})});
      // console.log(imageWidth)
      return(plaque)
    };


   useEffect(() => {
      const dbh = firebase.firestore();
      dbh
      .collection("FINAL_DEMO_DB_V1")
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
            // title={i.Title} 
          />
        ))}
      </MapView>

      <View style={styles.expandingView}>
         <TouchableOpacity style={styles.touchableButton } onPress={toggleCollapsed}>
            <Text style={styles.plaqueTitle}>{plaque.PreviewTitle}</Text>
            <Image source={require("../assets/upArrowWhite.png")} style={styles.arrowLogo}></Image>
         </TouchableOpacity>
         <Animated.View style={{maxHeight: animationHeight}}>
            <ScrollView style={styles.scrollviewContainer}>
               <View style={{bottom: 0, flex: 1, paddingBottom: 900, height: '100%'}}>
                  <View style={styles.plaqueImageContainer}>
                     <Image style={styles.plaqueImage} source={{ url: plaque.ImageUrl }}/>
                     <Text style={styles.imageComment}>{plaque.ImageComment}</Text>
                  </View>
                  <View>
                     <Text style={styles.plaqueTitleScrollview}>{plaque.Title}</Text>
                     <Text style={styles.paragraphLeft}>{plaque.Description}</Text>
                     <Text style={styles.paragraphLeft}>{plaque.LocationString}</Text>
                     <Text style={styles.paragraphLeft}>{plaque.Year}</Text>
                     <Text style={styles.paragraphLeft}>{plaque.CreatorString}</Text>
                     <View style={styles.bottomImageContainter}>
                        <Image style={styles.plaqueImageBottom} source={{ url: plaque.ImageUrl2 }}/>
                     </View>
                  </View>
               </View>
            </ScrollView>
         </Animated.View>
      </View>
    </>
  );
}

export default Map;

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
   //  ...StyleSheet.absoluteFillObject,
   },
   paragraph: {
      fontFamily: "Palatino",
      margin: 28,
      fontSize: 14,
      fontWeight: 'bold',
      alignSelf: 'center',
     },
   paragraphLeft: {
      fontFamily: "Palatino",
      margin: 28,
      fontSize: 14,
      alignSelf: 'flex-start',
      marginHorizontal: "10%",
    },

   imageComment: {
      fontFamily: "Palatino",
      margin: 28,
      fontSize: 12,
      alignSelf: 'center',
      marginHorizontal: "10%",
   },
   paragraphContainer: {
      backgroundColor: 'white',
      marginHorizontal: "5%",
      alignSelf: 'center',
      width: "90%",
     },
   scrollviewContainer: {
      // position: 'relative',
      backgroundColor: 'white',
      marginHorizontal: "5%",
      alignSelf: 'center',
      width: "100%",
      height: "400%",
      // height: 200,
      // height: undefined,
      // bottom: 0,
      // marginBottom: 20,
      // backgroundColor: 'red'
   },
   outerScrollContianer: {
      position: 'relative',
      paddingVertical: 100,
   },
   bottomImageContainter: {
      height: "100%",
      marginHorizontal: "10%",
   },
   plaqueImageBottom: {
      height: "100%",
      width: "100%",
      alignSelf: 'center',
      paddingBottom: 10,
   },
   plaqueImage: {
      flex: 1,
      // height: undefined,
      height: "100%",
      // minHeight: 10,
      width: "90%",
      // maxHeight: 350,
      alignSelf: 'center',
      resizeMode: 'contain'
   },
   plaqueImageContainer: {
      // flex: 2,
      height: "50%",
      // marginHorizontal: "5%",
      
      // width: '90%',
      // height: undefined,
      // resizeMode: 'contain',
      // alignSelf: 'center',
      // // height: ,
      // backgroundColor: 'red',
      // justifyContent: 'center'
   },
   expandingView: {
      // flex: 1,
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
   },
   plaqueTitle: {
      fontFamily: "Palatino",
      color: 'white',
      fontSize: 20,
      marginStart: 10,
      marginEnd: 20,
      alignSelf: 'center'
   },
   plaqueTitleScrollview: {
      fontFamily: "Palatino",
      fontWeight: 'bold',
      color: 'black',
      fontSize: 28,
      marginTop: 20,
      marginHorizontal: "10%",
      alignSelf: 'flex-start',
   },
});