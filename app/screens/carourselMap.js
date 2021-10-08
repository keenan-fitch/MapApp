import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
  Circle,
} from "react-native-maps";
import Carousel from "react-native-snap-carousel";
import mapData from "../../constants/Plaques_SmallDB.json";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from 'react-native-elements';

export default class CarouselMap extends Component {
  static navigationOptions = {
    title: "Map Page",
  };

  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
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
  };
  renderCarouselItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Image style={styles.cardImage} source={item.image} />
      {/* <Text style={styles.cardDescription}>{item.description}</Text> */}
    </View>
  );

  render() {
    const { search } = this.state;
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
          
          <Marker
            draggable
            coordinate={{ latitude: 37.7825259, longitude: -122.4351431 }}
            image={require("../assets/map_marker.png")}
          ></Marker>
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
        <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
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
      </View>
    );
  }
}

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
    // backgroundColor: "red",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 200, //Here is the trick
  },
  carousel: {
    position: "absolute",
    bottom: 0,
    marginBottom: 0,
    // backgroundColor: 'rgba(255,255,255, 1)',
    backgroundColor: "#ececec",
    // borderColor: 'rgba(105,105,105, 1)',
    // borderTopWidth: 1,
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
});
