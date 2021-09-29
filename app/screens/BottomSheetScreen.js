import * as firebase from "firebase";
import "firebase/firestore";
import "react-native-gesture-handler";
import React, { useState, Component, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {GetData} from '../data.js';


// const users = GetData()

// console.log(users)


const { block, set, greaterThan, lessThan, Value, cond, sub } = Animated
const windowHeight = Dimensions.get("window").height;


const Lorem = () => (
  <View style={styles.bottomSheetContainer}>
    <View style={styles.bottomSheetInnerContainer}>
      <Text></Text>
    </View>
  </View>
)

export default class Example extends React.Component {

  trans = new Value(0)
  untraversedPos = new Value(0)
  prevTrans = new Value(0)
  headerPos = block([
    cond(
      lessThan(this.untraversedPos, sub(this.trans, 100)),
      set(this.untraversedPos, sub(this.trans, 100))
    ),
    cond(
      greaterThan(this.untraversedPos, this.trans),
      set(this.untraversedPos, this.trans)
    ),
    set(this.prevTrans, this.trans),
    this.untraversedPos,
  ])
  renderHeader = name => (
    // Header View section - Can have plauq name & minimize symbol
    <View style={styles.headerContainer}>
      {/* <Text>{name}</Text> */}
      <Text style={styles.plaqueHeader}> Plauqe Name Here</Text>
      <Image source={require("../assets/upArrow.png")} style={styles.arrowLogo}></Image>
    </View>
  )

  renderInner = () => (
    <View>
      <Animated.View
        style={{
          zIndex: 1,
          transform: [
            {
              translateY: this.headerPos,
            },
          ],
        }}
      >
        {this.renderHeader('one')}
      </Animated.View>
      <Lorem />
      <Lorem />
    </View>
  )

  render() {
    return (
      // Below is the map and bottomsheet
      <View style={styles.container}>
        <MapView style={styles.MapLayout}
          initialRegion={{
            latitude: -31.98093734685109,
            longitude: 115.81848976510486,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          // r  Not sure why this line was in bennys so commenting out for now
          style={{ flex: 1, minHeight: windowHeight }}
          provider={PROVIDER_GOOGLE}
        >
        </MapView>
        <BottomSheet
          contentPosition={this.trans}
          snapPoints={[100, 400]}
          renderContent={this.renderInner}
        />
      </View>
    )
  }
}

const IMAGE_SIZE = 200

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  MapLayout: {
    ...StyleSheet.absoluteFillObject,
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#ececec',
    borderWidth: 0.5,
    paddingVertical: 20,
    justifyContent: 'center',
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  plaqueHeader: {
    fontSize: 18,
    position: "relative",
    fontWeight: "bold",
    marginLeft: 15,
    // textAlign: 'left'
    // alignItems: "centre"
  },
  arrowLogo: {
    height: 20,
    width: 20,
    opacity: 0.5,
    marginRight: 15,
  },
  bottomSheetContainer: {
    backgroundColor: 'white' 
  },
  bottomSheetInnerContainer: {
    paddingVertical: 40,
    width: "85%",
    // justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
  
})