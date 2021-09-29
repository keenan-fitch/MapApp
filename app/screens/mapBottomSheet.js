import React, { useState, useEffect, useCallback } from 'react';
import {
  Dimensions, StatusBar, StyleSheet, Text,
  TextInput, TouchableOpacity, View, Button
} from 'react-native';
// import Constants from 'expo-constants';
import Mapview, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location'; // installed
import * as Permissions from 'expo-permissions'; // installed
import datas from '../../constants/datas.json';
// You can import from local files
import Animated from 'react-native-reanimated';  // installed
import BottomSheet from 'reanimated-bottom-sheet'; // installed
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet'; // installed


const { height } = Dimensions.get(`window`);



export default function App() {
   const sheetRef = React.useRef(null);
   const renderContent = () => (
     <View
       style={{
         backgroundColor: 'white',
         padding: 16,
         height: 450,
       }}
     >
       <Text>Swipe down to close</Text>
 
       <Button
         title="Open Bottom Sheet"
         onPress={() => sheetRef.current.snapTo(0)}
       />
 
     </View>
   );
 
 
 
   const [state, setstate] = useState({
    latitude: -31.98093734685109,
    longitude: 115.81848976510486,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
   });

 
   useEffect(() => {
     _onMapReady();
   }, [_onMapReady]);
 
   const _onMapReady = useCallback(async () => {
     const { status } = await Permissions.askAsync(Permissions.LOCATION);
     if (status !== `granted`) {
     }
     const location = await Location.getCurrentPositionAsync({ "accuracy": Location.Accuracy.High });
     setstate({
       ...state,
       "latitude": location.coords.latitude,
       "longitude": location.coords.longitude
     });
   }, [state]);
 
 
 
   return (
     <View style={styles.container}>
       <Mapview
         provider={PROVIDER_GOOGLE}
         initialRegion={state}
         showsIndoors={true}
         showsMyLocationButton={true}
         zoomControlEnabled={true}
         zoomEnabled={true}
         zoomTapEnabled={true}
         showsScale={true}
 
         showsBuildings={true}
         showsUserLocation={true}
         showsCompass={true}
         onMapReady={_onMapReady}
 
         style={styles.mapStyle}>
         {
           datas.data?.map((i) => {
             return (
               <Marker
                coordinate={{
                  "latitude": i.location.lat,
                  "longitude": i.location.lng
                }}
                 animation={true}
                 key={i.id}
 
               >
                 <Callout
                   style={{ "width": 100, "height": 50 }}>
                   <View>
                     <Text>{i.Property}</Text>
                   </View>
                 </Callout>
               </Marker>
             );
           })
         }
 
       </Mapview>
 
 
       <ScrollBottomSheet
        // ref={bottomSheetRef}
        componentType="FlatList"
        topInset={24}
        animatedPosition={animatedPosition.current}
        snapPoints={[128, `50%`, height - 220]}
        initialSnapIndex={2}
        renderHandle={() =>
          <Handle
            distance = {distance}
            bottomSheetProperties={bottomSheetProperties}
            value={searchTerm}
            onChangeText={setSearchTerm}
            onFocus={() => setSearchBarIsFocussed(true)}
            onBlur={() => setSearchBarIsFocussed(false)}
          />
        }
        data={bottomSheetProperties}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Render item={item}/>}

        contentContainerStyle={styles.contentContainerStyle}
      />
 
     </View>
   );
 }
 const styles = StyleSheet.create({
   container: {
     "flex": 1,
     "alignItems": `center`,
     "justifyContent": `center`
     // position: 'absolute',
 
   },
   mapStyle: {
     "height": Dimensions.get(`window`).height,
     "width": Dimensions.get(`window`).width
   },
 
 });