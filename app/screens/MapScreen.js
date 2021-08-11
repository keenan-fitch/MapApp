
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import PropTypes from "prop-types";
import { mapStyle } from '../../constants/mapStyle.json';
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
  useDeviceOrientation} from '@react-native-community/hooks';

//   var mapStyle = [
//     {"elementType": "geometry","stylers": [{"color": "#ebe3cd"}]},
//     {"elementType": "labels.text.fill","stylers": [{"color": "#523735"}]},
//     {"elementType": "labels.text.stroke","stylers": [{"color": "#f5f1e6"}]},
//     {"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#c9b2a6"}]},
//     {"featureType": "administrative","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
//     {"featureType": "administrative.land_parcel","stylers": [{"visibility": "off"}]},
//     {"featureType": "administrative.land_parcel","elementType": "geometry.stroke","stylers": [{"color": "#dcd2be"}]},
//     {"featureType": "administrative.land_parcel","elementType": "labels.text.fill","stylers": [{"color": "#ae9e90"}]},
//     {"featureType": "administrative.neighborhood","stylers": [{"visibility": "off"}]},
//     {"featureType": "landscape.man_made","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
//     {"featureType": "landscape.natural","elementType": "geometry","stylers": [{"color": "#dfd2ae"}]},
//     {"featureType": "landscape.natural","elementType": "labels","stylers": [{"visibility": "off"}]},
//     {"featureType": "landscape.natural","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
//     {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#dfd2ae"}]},
//     {"featureType": "poi","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
//     {"featureType": "poi", "elementType": "labels.text","stylers": [{"visibility": "off"}]},
//     {"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#93817c"}]},
//     {"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#a5b076"}]},
//     {"featureType": "poi.park","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
//     {"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#447530"}]},
//     {"featureType": "road","elementType": "geometry","stylers": [{"color": "#f5f1e6"}]},
//     {"featureType": "road","elementType": "labels","stylers": [{"visibility": "off"}]},
//     {"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#fdfcf8"}]},
//     {"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#f8c967"}]},
//     {"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{ "color": "#e9bc62"}]},
//     {"featureType": "road.highway.controlled_access","elementType": "geometry","stylers": [{"color": "#e98d58"}]},
//     {"featureType": "road.highway.controlled_access","elementType": "geometry.stroke","stylers": [{"color": "#db8555"}]},
//     {"featureType": "road.local","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
//     {"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#806b63"},{"visibility": "off"}]},
//     {"featureType": "transit","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
//     {"featureType": "transit.line","elementType": "geometry","stylers": [{"color": "#dfd2ae"}]},
//     {"featureType": "transit.line","elementType": "labels.text.fill","stylers": [{"color": "#8f7d77"}]},
//     {"featureType": "transit.line","elementType": "labels.text.stroke","stylers": [{"color": "#ebe3cd"}]},
//     {"featureType": "transit.station","elementType": "geometry","stylers": [{"color": "#dfd2ae"}]},
//     {"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#b9d3c2"}]},
//     {"featureType": "water","elementType": "labels.text","stylers": [{"visibility": "off"}]},
//     {"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#92998d"}]}]
  
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
        customMapStyle={mapStyle}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -31.97930264357072,
          longitude: 115.81842394700632,
          latitudeDelta: 0.012,
          longitudeDelta: 0.012,
          }}>

        <Marker 
          coordinate={{
            latitude: -31.976588426732672,
            longitude: 115.8165190925955,
          }}
          title="Sunken Garden"
          description="This famous Sunken Garden built in 1947"
        >
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