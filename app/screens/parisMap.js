import React, { Component } from "react";
import { StyleSheet,View, Text, Image, Dimensions } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const { block, set, greaterThan, lessThan, Value, cond, sub } = Animated
const windowHeight = Dimensions.get("window").height;

export default class ParisMap extends Component {

// BottomScreen Constants
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
  
  
  static navigationOptions = {
     title: "Map",
   };
   
   state = {
      markers: [],
      coordinates: [
        {
          name: "Prof HE Whitfeld, 1875-1939",
          description:
          "Hubert Edwin Whitfeld (1875-1939), university vice-chancellor, was born on 14 March 1875 in Sydney, seventh child of Edwin Whitfeld, schoolmaster, and his wife Eleanor, née Cooke, both English born.",
          latitude: -31.9763010875358,
          longitude: 115.817898240332,
          year: 1978,
          plaqueType: "Bust",
          location: "Whitfeld Court",
          image: require("../assets/plaqueImages/whitfield2.png"),
        },
        {
          name: "Seek Wisdom",
          description: "Seek Wisdoooooooommmmmm!! Get some!",
          latitude: -31.9790207288426,
          longitude: 115.817331455612,
          year: 2004,
          location: "Library West End",
          plaqueType: "Plinth",
          image: require("../assets/plaqueImages/wisdom.png"),
        },
        {
          name: "Sundial Garden Mosaic Eggs",
          description: "Check out this Sundial",
          latitude: -31.9786175502937,
          longitude: 115.819183586576,
          year: 2008,
          location: "Between Arts and UWA Club",
          plaqueType: "Sculpture",
          image: require("../assets/plaqueImages/testsundial.png"),
        },
        {
          name: "Hours to Sunset",
          description: "Forgot your watch? EZ we got a hours to sunset Sundial",
          latitude: -31.9786567970107,
          longitude: 115.819195656516,
          year: 2007,
          location: "Between Arts and UWA Club",
          plaqueType: "Sundial",
          image: require("../assets/plaqueImages/sunset.png"),
        },
        {
          name: "Shann Memorial Sundial",
          latitude: -31.976767456576,
          longitude: 115.816682973929,
          year: 1998,
          plaqueType: "Sundial",
          location: "Sunken Garden",
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
      // this._bottomsheet.snapToItem(index);
   };
   
   renderCarouselItem = ({ item }) => (
      <View style={styles.cardContainer}>
         <Text style={styles.cardTitle}>{item.name}</Text>
         <Image style={styles.cardImage} source={item.image} />
         <Text style={styles.plaqueDescriptionText}>{item.description}</Text>
         

         {/* ******* Below is some rows with information: year, location, type etc a scroll view **** */}
         <View style={styles.rowContainer}>
            <View style={styles.row}>
               <Text style={styles.plaqueHeading}>Year:</Text>
               <Text style={styles.plaqueStat}>{item.year}</Text>
            </View>

            <View style={styles.row}>
               <Text style={styles.plaqueHeading}>Location:</Text>
               <Text style={styles.plaqueStat}>{item.location}</Text>
            </View>

            <View style={styles.row}>
               <Text style={styles.plaqueHeading}>Plaque Type:</Text>
               <Text style={styles.plaqueStat}>{item.plaqueType}</Text>
            </View>
         </View>
         {/* <Image source={require("../assets/upArrow.png")} style={styles.arrowLogo}></Image> */}
      </View>
   );
   
   // Rendering the lower bottomsheet containg details
   renderInner = (item) => (
      <View style={styles.bottomSheetInnerContainer}>
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
         {this.renderHeader()}
      </Animated.View>
      {/* <Text style={styles.descriptionText}>{item.name} </Text> */}
      {/* <View style={styles.tourContainer}> 
         <Image source={require("../assets/sunkenGarden.jpeg")} style={styles.bottomsheetImage}></Image>
      </View> */}

      <View style={styles.row}>
         <Text style={styles.plaqueHeading}>Location:</Text>
         <Text style={styles.plaqueStat}>Arts Building</Text>
      </View>
      </View>
   );
   renderHeader = () => (
   <View style={styles.headerContainer}>
      <Text style={styles.locationHeader}>More Information</Text>
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
        
        {/* <BottomSheet
          ref={(c) => {
            this._bottomsheet = c;
          }}
          data={this.state.coordinates}
          renderContent={this.renderHeader}
          renderContent={this.renderInner}
          contentPosition={this.trans}
          // Change points below the determine how far the bottomsheet pops up
          snapPoints={[50, 500]}
         //  renderContent={this.renderHeader}
         //  onSnapToItem={(index) => this.onCarouselItemChange(index)}
          /> */}
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
    bottom: 230,
  },
  carousel: {
    position: "absolute",
    bottom: 0,
    marginBottom: 0,
    backgroundColor: "#ececec",
    height: 500,
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
    paddingVertical: 10,
    justifyContent: 'center',
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  locationHeader: {
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
    width: "100%",
    color: "white",
    backgroundColor: "white",
    height: 600
  },
  descriptionText: {
     fontSize: 20,
     paddingVertical: 30,
     marginLeft: 20
  }, 
  bottomsheetImage: {
   flex: 1,
   width: null,
   height: null,
   resizeMode: 'contain',
   // textAlign: "center",
   // textAlignVertical: "center",
},
tourContainer: {
   // flex: 1,
   height: 250,
   width: 380,
   top: 20,
},
plaqueHeading: {
   fontSize: 16,
   marginLeft: 20,
   fontWeight: 'bold',
   paddingTop: 10,
   top: 220
},
plaqueStat: {
   fontSize: 16,
   marginLeft: 15,
   paddingTop: 10,
   top: 220
},
row: {
   // ...StyleSheet.absoluteFillObject,
   position: 'relative',
   flex: 1,
   flexDirection: "row",
   // paddingTop: 120
 },
 plaqueDescriptionText: {
   color: 'black', 
   top: 200,
   fontSize: 16,
 },
 rowContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-evenly',
    top: 140,
    height: 100
    
    
    
 }

});
