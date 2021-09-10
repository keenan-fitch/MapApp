import * as firebase from "firebase";
import "firebase/firestore";
import "react-native-gesture-handler";
import React, { useState, Component, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
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

const dbh = firebase.firestore();

function TestScreen() {
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = dbh.collection("test").onSnapshot((querySnapshot) => {
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
        <View
          style={{
            height: 50,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Description: {item.Description}</Text>
          <Text>User ID: {item.id}</Text>
          <Text>Name: {item.name}</Text>
        </View>
      )}
    />
  );
}

export default TestScreen;
