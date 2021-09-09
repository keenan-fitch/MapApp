import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import PropTypes from "prop-types";
import mapStyle from '../../constants/mapStyle.json';
import { Dimensions, StyleSheet, Text, View, Image, SafeAreaView, Button, Platform, TouchableOpacity } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import mapData from '../../constants/Plaques_SmallDB.json';
import { currentlocationbut } from '../../currentlocationbut,js';
//import mapData from '../../constants/ParisLocations.json';

class MapScreen extends Component {
        constructor() { super(); this.state = { data: mapData } }
        centerMap() {
                const { latitude,
                        longitude,
                        latitudeDelta,
                        longitudeDelta } = this.state.region;
                this.map.animateToRegion({
                        latitude,
                        longitude,
                        latitudeDelta,
                        longitudeDelta

                })
        }
        render() {
                return (
                        <currentlocationbut cb={() => { this.CenterMap() }}>
                                <MapView
                                        style={StyleSheet.absoluteFillObject}
                                        showsUserLocation={true}
                                        customMapStyle={mapStyle}
                                        provider={PROVIDER_GOOGLE}

                                        ref={(map => this.map = map)}
                                        //do we center on user? if so try
                                        /*
                                        region = {
                                        latitude: location.coords.latitude,
                                        longitude: location.coords.longitude,
                                        latitudeDelta: 0.045,
                                        longitudeDelta: 0.045,
                                        }
                                        */
                                        region={{
                                                latitude: -31.9795,
                                                longitude: 115.819,
                                                latitudeDelta: 0.0075,
                                                longitudeDelta: 0.0075
                                        }}>
                                        {this.state.data.map((dynamicData, i) => <Marker key={i} coordinate={{ latitude: dynamicData.Latitude, longitude: dynamicData.Longitude }}>
                                                <Callout>
                                                        <View style={{ flexDirection: "col", width: 320 }}>
                                                                <Text style={styles.name}>key={i} {dynamicData.Title}</Text>
                                                                <Text> key={i} {dynamicData.Description}</Text>
                                                        </View>
                                                </Callout>
                                        </Marker>)}
                                </MapView>
                                )
        }
}




                                export default MapScreen;
                                const styles = StyleSheet.create({
                                        bubble: {
                                        flexDirection: "row",
                                alignSelf: "flex-start",
                                backgroundColor: "#fff",
                                borderRadius: 6,
                                borderColor: "#ccc",
                                borderWidth: 0.5,
                                padding: 15,
                                width: 150,
        },
                                name: {
                                        fontSize: 16,
                                marginBottom: 5,
                                fontWeight: 'bold',
        },
                                arrow: {
                                        backgroundColor: 'transparent',
                                borderColor: 'transparent',
                                borderTopColor: '#fff',
                                borderWidth: 16,
                                alignSelf: 'center',
                                marginTop: -32,
        },
                                arrowBorder: {
                                        backgroundColor: 'transparent',
                                borderColor: 'transparent',
                                borderTopColor: '#007a87',
                                borderWidth: 16,
                                alignSelf: 'center',
                                marginTop: -0.5,
        }
})