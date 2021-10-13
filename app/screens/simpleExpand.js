import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CollapseView from '../screens/ExpandingView';
import { Card } from 'react-native-paper';
import MapView from 'react-native-maps';

export default function simpleExpand() {
  return (
    <View style={styles.outerScreen}>
       <MapView style={styles.mapStyle}>

       </MapView>
      <View style={styles.expandContainer}>
         <CollapseView />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   //  justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  outerScreen: {
     ...StyleSheet.absoluteFillObject,
  },
  mapStyle: {
   ...StyleSheet.absoluteFillObject,
  },
  expandContainer: {
   ...StyleSheet.absoluteFillObject,
  }
});
