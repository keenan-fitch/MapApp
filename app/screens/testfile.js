import * as firebase from "firebase";
import "firebase/firestore";
import "react-native-gesture-handler";
import React, { useState, Component, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { render } from "react-dom";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

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

function TestMapScreen() {
  const [users, setUsers] = useState([]); // Initial empty array of users
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    const dbh = firebase.firestore();

    const subscriber = dbh
      .collection("Plaques_SmallDB")
      .onSnapshot((querySnapshot) => {
        const users = [];

        querySnapshot.forEach((documentSnapshot) => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  const Load = () => {
    return <Text>loading</Text>;
  };
  //<Marker coordinate={coordinate} key={`${coordinate.latitude}_${coordinate.longitude}`} />

  return (
    <>
      <MapView
        minZoomeLevel={1}
        maxZoomLevel={7}
        style={{ flex: 1, minHeight: windowHeight }}
        provider={PROVIDER_GOOGLE}
      >
        {users.length !== 0 ? (
          users.map((i, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: i.Latitude,
                longitude: i.Longitude,
              }}
            />
          ))
        ) : (
          <Load />
        )}
      </MapView>
    </>
  );
}

export default TestMapScreen;