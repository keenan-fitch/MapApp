import * as firebase from "firebase";
import "firebase/firestore";
import "react-native-gesture-handler";
import React, { useState, Component, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { render } from "react-dom";

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

function TestScreen() {
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    const dbh = firebase.firestore();

    const subscriber = dbh.collection("plaques").onSnapshot((querySnapshot) => {
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

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <SafeAreaView
          style={{
            height: 250,
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text>Title: {item.Title}</Text>
          <Text></Text>
          <Text>Description: {item.Description}</Text>
          <Text></Text>
          <Text>Latitude: {item.Latitude}</Text>
          <Text></Text>
          <Text>Longitude: {item.Longitude}</Text>
        </SafeAreaView>
      )}
    />
  );
}

export default TestScreen;
