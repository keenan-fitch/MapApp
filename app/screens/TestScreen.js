import * as firebase from "firebase";
import "firebase/firestore";
import "react-native-gesture-handler";
import React, { useState, Component } from "react";
import { View, Text } from "react-native";
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

async function getDocument(db) {
  // [START firestore_data_get_as_map]
  const cityRef = db.collection("test").doc("1");
  const doc = await cityRef.get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    console.log("Document data:", doc.data().Description);
    return doc.data().Description;
  }
  // [END firestore_data_get_as_map]
}

class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        x: getDocument(dbh);
    }
  }

  render() {
    return (
      <View>
        <Text> {this.x} !!!!!!!!!! </Text>
      </View>
    );
  }
}

export default TestScreen;
