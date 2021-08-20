import React, {Component} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import PropTypes from "prop-types";
import mapStyle from '../../constants/mapStyle.json';
import { Dimensions, StyleSheet, Text, View, Image, SafeAreaView, Button, Platform, TouchableOpacity} from 'react-native';
import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import mapData from '../../constants/ParisLocations.json';

class MapScreen extends Component {
        constructor()
        {super();this.state={data: mapData}}
        render()
        {
                return(
                        <MapView 
                                style={StyleSheet.absoluteFillObject}
                                showsUserLocation={true}
                                customMapStyle={mapStyle}
                                provider={PROVIDER_GOOGLE}
                                initialRegion={{
                                        latitude: 48.869312339207,
                                        longitude: 2.337119507571479,
                                        latitudeDelta: 0.162,
                                        longitudeDelta: 0.162
                                        }}>
                                {this.state.data.map((dynamicData,i) =>  <Marker coordinate={{latitude:dynamicData.Latitude,longitude:dynamicData.Longitude}} 
                                                                                description={dynamicData.Description}
                                                                                title={dynamicData.siteName}>
                                                                        </Marker>)}

                        </MapView>
                )
        }
}
export default MapScreen;