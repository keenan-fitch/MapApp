import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Alert, Platform, Dimensions, ScrollView } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import Carousel from "react-native-snap-carousel";
import mapData from "../../constants/Plaques_SmallDB.json";
import { LinearGradient } from "expo-linear-gradient";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const { block, set, greaterThan, lessThan, Value, cond, sub } = Animated
const windowHeight = Dimensions.get("window").height;
// const Lorem = () => (
//   <View style={styles.bottomSheetContainer}>
//     <View style={styles.bottomSheetInnerContainer}>
//       <Text></Text>
//     </View>
//   </View>
// )
export default class CarouselMap extends Component {

// BELOW IS BottomScreen view
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
      {/* <Lorem />
      <Lorem /> */}
    </View>
  )
  
  static navigationOptions = {
    title: "Map Page",
  };
  
  state = {
    markers: [],
    coordinates: [
      {
        name: "Prof HE Whitfeld, 1875-1939",
        description:
        "Here is a little description. Longer dscription words...words...words...words...words...words...words...words...words...words...words...words...",
        latitude: -31.9763010875358,
        longitude: 115.817898240332,
        image: require("../assets/plaqueImages/whitfield2.png"),
      },
      {
        name: "Seek Wisdom",
        latitude: -31.9790207288426,
        longitude: 115.817331455612,
        image: require("../assets/plaqueImages/wisdom.png"),
      },
      {
        name: "Sundial Garden Mosaic Eggs",
        latitude: -31.9786175502937,
        longitude: 115.819183586576,
        image: require("../assets/plaqueImages/testsundial.png"),
      },
      {
        name: "Hours to Sunset",
        latitude: -31.9786567970107,
        longitude: 115.819195656516,
        image: require("../assets/plaqueImages/sunset.png"),
      },
      {
        name: "Shann Memorial Sundial",
        latitude: -31.976767456576,
        longitude: 115.816682973929,
        image: require("../assets/plaqueImages/shann.png"),
      },
    ],
  };
  onCarouselItemChange = (index) => {
    let location = this.state.coordinates[index];
    
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.0045,
      longitudeDelta: 0.0045,
    });
    this.state.markers[index].showCallout();
  };
  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.0045,
      longitudeDelta: 0.0045,
    });
    this._carousel.snapToItem(index);
    this._bottomsheet.snapToItem(index);
  };

  renderCarouselItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Image style={styles.cardImage} source={item.image} />
    </View>
  );
  renderHeader = ({ item }) => (
    // Header View section - Can have plauq name & minimize symbol
    <View style={styles.headerContainer}>
      <Text style={styles.plaqueHeader}>Name of Place</Text>
      <Image source={require("../assets/upArrow.png")} style={styles.arrowLogo}></Image>
    </View>
  );
  
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={(map) => (this._map = map)}
          showsUserLocation={true}
          style={styles.map}
          initialRegion={{
            latitude: -31.9795,
            longitude: 115.819,
            latitudeDelta: 0.0075,
            longitudeDelta: 0.0075,
          }}
        >
          {/* <Marker
            draggable
            coordinate={{ latitude: 37.7825259, longitude: -122.4351431 }}
            image={require("../assets/map_marker.png")}
          ></Marker> */}
          {this.state.coordinates.map((marker, index) => (
            <Marker
              key={marker.name}
              ref={(ref) => (this.state.markers[index] = ref)}
              onPress={() => this.onMarkerPressed(marker, index)}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
            >
              <Callout>
                <Text>{marker.name}</Text>
              </Callout>
            </Marker>
          ))}
        </MapView>
        <View style={styles.bottomView}>
          <LinearGradient
            style={styles.gradient}
            colors={["rgba(0, 0, 0,0)", "rgba(0, 0, 0,1)"]}
          />
        </View>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={this.state.coordinates}
          containerCustomStyle={styles.carousel}
          renderItem={this.renderCarouselItem}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={300}
          removeClippedSubviews={false}
          onSnapToItem={(index) => this.onCarouselItemChange(index)}
          />
        
{/* *****************      BOTTOMSHEET CODEBLOCK START     ********************* */}
        
        <BottomSheet
          ref={(c) => {
            this._carousel = c;
          }}
          data={this.state.coordinates}
          renderItem={this.renderHeader}
          contentPosition={this.trans}
          snapPoints={[100, 400]}
          renderContent={this.renderInner}
          onSnapToItem={(index) => this.onCarouselItemChange(index)}

          />

{/* *****************      BOTTOMSHEET CODEBLOCK END     ********************* */}

      </View>
    );
  }
}

const IMAGE_SIZE = 200
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: 5,
    bottom: 0,
  },
  bottomView: {
    width: "100%",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 200,
  },
  carousel: {
    position: "absolute",
    bottom: 0,
    marginBottom: 0,
    backgroundColor: "#ececec",
    height: 220,
  },
  cardContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: 200,
    width: 300,
    padding: 15,
    borderRadius: 24,
    marginTop: 10,
  },
  cardImage: {
    height: 150,
    width: 300,
    bottom: 0,
    position: "absolute",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  cardTitle: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
  },
  cardDescription: {
    color: "white",
    fontSize: 18,
    alignSelf: "flex-start",
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
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});
