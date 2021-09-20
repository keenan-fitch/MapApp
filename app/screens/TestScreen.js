import * as firebase from "firebase";
import "firebase/firestore";
import "react-native-gesture-handler";
import React, { useState, Component, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";
import { render } from "react-dom";
import "firebase/storage";

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

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

function TestScreen() {
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    const dbh = firebase.firestore();

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
        <SafeAreaView
          style={{
            height: 250,
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text>Description: {item.Description}</Text>
          <Text></Text>
          <Text>Id: {item.id}</Text>
          <Text></Text>
          <Text>Name: {item.name}</Text>
          <Text></Text>
          <Text>Url:{item.ImageUrl}</Text>

          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.image,
            }}
          />
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.ImageUrl,
            }}
          />
          {/* <Image style={styles.tinyLogo} source={require(item.ImageUrl)} /> */}
          {/* <Image
            style={styles.tinyLogo}
            source={require("../assets/plaqueImages/sunset.png")}
          /> */}
        </SafeAreaView>
      )}
    />
  );
}

export default TestScreen;
