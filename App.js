// Launch App: 
// Make sure in directory:  Desktop/Apps/MappApp or wherever it is stored locally
// To start the app use command: npm start

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import PropTypes from "prop-types";
import { 
  Dimensions,
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Button,
  Platform,
  TouchableOpacity} from 'react-native';
  import { 
    useDimensions, 
    useDeviceOrientation 
  } from '@react-native-community/hooks';
  
  function padding(a, b, c, d) {
    return {
      paddingTop: a,
      paddingRight: b ? b : a,
      paddingBottom: c ? c : a,
      paddingLeft: d ? d : (b ? b : a)
    }
  }
  export default function App() {
    const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <MapView 
      style={StyleSheet.absoluteFillObject}
      showsUserLocation={true}
      
                provider={PROVIDER_GOOGLE}
          customMapStyle={[

            {
              featureType: "poi",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "landscape",
              stylers: [
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "poi.park",
              stylers: [
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "road",
              //elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "transit",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            }
          ]}
          initialRegion={{
            latitude: -31.97930264357072,
            longitude: 115.81842394700632,
            latitudeDelta: 0.012,
            longitudeDelta: 0.012,

          }}  
      >
        <Marker 
          coordinate={{
            latitude: -31.976588426732672,
            longitude: 115.8165190925955,
          }}
          title="Sunken Garden"
          description="This famous Sunken Garden built in 1947"
        >
          {/* <Callout tooltip>
            <View>
              <View style={styles.bubble}
                <Text style={styles.name}>  </Text>
              </View>
            </View>
          </Callout> */}
        </Marker>



        <Marker 
          coordinate={{
            latitude: -31.978249265606806,
            longitude: 115.81809998169155,
          }}
          title="Queen Elizabeth's Tree"
          description="Ficus hilliiwas Tree planted by Queen Elizabeth II during her visit in 1963"
        />
        
        <Marker 
          coordinate={{
            latitude: -31.979937061434793,
            longitude: 115.81714537400859,
          }}
          title="Irwin Street Building"
          description="The Irwin Street Building was fully restored and officially re-opened on 15 February 1987 by then Governor His Excellency Professor Gordon Reid."
        />


      
      </MapView>
      
      {/* <Text style={{...padding(10, 20, 40, 20), color: "black", fontSize: 20, fontFamily: 'Verdana', fontWeight: 'bold'}}>This is a Map in an App!</Text>
      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image source={{
          width: 150,
          height: 200,
          uri: "https://d33wubrfki0l68.cloudfront.net/1484aa80faa12a0025d69af681b6428147f1104f/5a9c3/assets/logos/uwa.png"
        }} />
      </TouchableOpacity> */}
    
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec', // UWA Silver as BG Color
    fontFamily: "Verdana",
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
