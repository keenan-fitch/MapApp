import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as firebase from "firebase";
import "firebase/firestore";

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

export async function getMarker(markerRetreived) {
  var marker = [];

  var snapshot = await firebase
    .firestore()
    .collection("Events")
    .orderBy("createdAt")
    .get();

  snapshot.forEach((doc) => {
    const markerItem = doc.data();
    markerItem.id = doc.id;
    marker.push(markerItem);
  });

  markerRetreived(marker);
}
class TestMapScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      marker: [],
    };
  }

  onMarkerReceived = (marker) => {
    this.setState((prevState) => ({
      marker: (prevState.marker = marker),
    }));
  };

  componentDidMount() {
    getMarker(this.onMarkerReceived);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.container}
          data={this.state.marker}
          renderItem={({ item }) => {
            return (
              <ListItem
                containerStyle={styles.listItem}
                title={`lat: ${item.geopoint.latitude}`}
                subtitle={`lng: ${item.geopoint.longitude}`}
                titleStyle={styles.titleStyle}
                subtitleStyle={styles.subtitleStyle}
                leftAvatar={{
                  size: "large",
                  rounded: false,
                  source: item.image && { uri: item.image },
                }}
              />
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

export default TestMapScreen;
