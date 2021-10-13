import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, Button, Animated, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function CollapseView() {


   // ***** Constants required for expand animation  *****

  const [collapsed, setCollapsed] = useState(true);
  const [maxLines, setMaxLines] = useState(2);
  const animationHeight = useRef(new Animated.Value(0)).current;
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const collapseView = () => {
      Animated.timing(animationHeight, {
        duration: 1000,
        toValue: 150,
        useNativeDriver: false,
      }).start();
  }
  const expandView = () => {
      setMaxLines(null)
      Animated.timing(animationHeight, {
        duration: 1000,
        toValue: 1000,
        useNativeDriver: false,
      }).start();
  }
  useEffect(() => {
    if (collapsed) {
      collapseView()
    } else {
      expandView()
    }
  }, [collapsed]);


//   **** Actual Content being rendered *****
  return (
  <View style={styles.outerView}>
      <View style={styles.expandingView}>
         <TouchableOpacity style={styles.touchableButton } onPress={toggleCollapsed}>
            <Image source={require("../assets/upArrowWhite.png")} style={styles.arrowLogo}></Image>
            {/* <Text style={styles.buttonText}> 
               Read More
            </Text> */}
         </TouchableOpacity>
            {/* <View styles={styles.buttonContainer}>
            </View> */}
         <Animated.View style={{maxHeight: animationHeight}}>
            <View style={styles.plaqueImageContainer}>
               <Image style={styles.plaqueImage} source={require("../assets/sunsetCrop.png")}  />
            </View>
            
            <View style={styles.paragraphContainer}>
               <Text style={styles.paragraph} numberOfLines={maxLines}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
               minim veniam, quis nostrud exercitation ullamco laboris nisi ut
               aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
               culpa qui officia deserunt mollit anim id est laborum.
               </Text>
            </View>
         </Animated.View>

      {/* </View>
      <View styles={styles.buttonContainer}> */}

      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
   //   ...StyleSheet.absoluteFillObject,
    margin: 28,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',

  },
  paragraphContainer: {
     backgroundColor: 'white',
     marginHorizontal: "5%",
     alignSelf: 'center'
  },
  plaqueImage: {
     height: 150,
     width: "100%",
     alignSelf: 'center',
  },
  plaqueImageContainer: {
   width: '90%',
   alignSelf: 'center',
   alignContent: 'center',

  },
  expandingView: {
     overflow:'hidden',
     position: 'absolute',
     bottom: 0,
     backgroundColor: "rgba(236, 236, 236, 0.8)",
     width: '100%'
  },
  outerView: {
     height: "100%",
     position: 'relative',
     bottom: 0
  },
  buttonExpand: {
     flex: 1,
     color: 'red',
     position: 'relative',
     justifyContent: 'flex-end',
     bottom: 0,
  },
  buttonContainer: {
     ...StyleSheet.absoluteFillObject,
     position: 'relative',

  },
  touchableButton: {
     height:  50,
     width: "90%",
     backgroundColor: '#808080',
     alignSelf: 'center',
     textAlign: "center",
     textAlignVertical: 'center',
     borderTopLeftRadius: 10,
     borderTopRightRadius: 10
  },
  buttonText: {
     fontSize: 20,
     alignSelf: "center",
     paddingVertical: 15,
     color: 'white'
  },
  arrowLogo: {
   height: 20,
   width: 20,
   opacity: 0.5,
   marginTop: 15,
   alignSelf: 'center'
 },
});

export default CollapseView;
