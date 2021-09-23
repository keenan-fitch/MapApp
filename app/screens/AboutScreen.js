import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

function About(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/#ececec.png')}>
            <ScrollView style={styles.scollV}>

                <Text style={styles.aboutTitle}> ABOUT THE UWAHS</Text>
                <Text></Text> 

                <Image style={styles.logo} source={{uri: "https://crowdresearch.uwa.edu.au/wp-content/uploads/2015/12/cropped-uwa-crest-512.png",}}>
                
                </Image>
                <Text style={styles.aboutBody}>
                The UWA Historical Society commenced in 2008 from the initiatives of a small group led by Prof Reg Appleyard and Heritage Officer, Shobha Cameron. 
                It received founding financial assistance from the Convocation of UWA graduates, and the support of Vice-Chancellor Prof. Alan Robson.                  </Text>
                <Text></Text> 
                <Text></Text> 
                <Text style={styles.aboutBody}>
                Further, distinguished graduates and staff continue to offer annual lectures in the lead-up to University Centenary celebrations. 
                The Society has conducted numerous seminars and walking tours of campus and produced associated publications from small, commemorative leaflets to the more substantial, ‘Personalities and Places on the Crawley Campus.’                </Text><Text></Text><Text></Text> 
                <Text style={styles.aboutBody}>
                An extensive oral history program has also been vigorously pursued. 
                A number of initiatives such as an annual Remembrance Day ceremony, the renewal of the WW1 Honour Board, and an Online WW2 Nominal Roll have all received grants.                </Text><Text></Text><Text></Text> 
                <Image style={styles.imageW} source={require("../assets/winthrop.jpeg")} ></Image>
                
                <Text></Text> 
                <Text style={styles.aboutBody}>
                Membership is open to all interested in the Society’s aims. Please check the website for further information.                 </Text><Text></Text><Text></Text> 

                <Text style={styles.aboutBody}>
                https://www.web.uwa.edu.au/uwahs                </Text><Text></Text><Text></Text> 
                <Text style={styles.aboutBody}>
            
                </Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>







            </ScrollView>
        </ImageBackground>   
    );
}
export default About;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#ececec",
    },
    logoContainer: {
        position: 'absolute',
        top: 200,
        alignItems: 'center',
        paddingVertical: "10%",
    },
    textHome: {
        top: 30,
        fontSize: 30, 
    },
    logo: {
        width: 150,
        height: 150,
        top: 65,
        position: "relative",
        alignSelf: "center"
    },

    imageW: {
        width: 300,
        height: 150,
        top: 85,
        position: "relative",
        alignSelf: "center",
        alignContent: "flex-end"
        // alignItems: "flex-end"

    },
    roundButton: {
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
        alignSelf: "center"
    },
    signup: {
        backgroundColor: 'white',
        color: '#3A59FF',
        width: "65%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '18%',
        padding: "2%",
        fontSize:  33,
        marginTop: '70%'
      },
    mapText: {
        backgroundColor: '#27348b',
        color: 'white',
        width: "100%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: "2%",
        fontSize:  27,
        marginTop: '10%',
        alignSelf: "center"
      },

    aboutBody: {
        width: "80%",
        top: 90,
        borderRadius: 10,
        alignSelf: "center",
        textAlign: "center",
        letterSpacing: 0.3,
        fontSize:  18,
        position: "relative",
        fontFamily: "Futura",
        paddingHorizontal: "0.3%",
        paddingVertical: "0.5%",

    },
    aboutTitle: {
        width: "80%",
        top: 40,
        borderRadius: 25,
        alignSelf: "center",
        fontSize:  27,
        position: "relative",
        textAlign: "center",
        fontFamily: "Futura",
        fontWeight: "bold",
        letterSpacing: 2,
    },
    scollV: {
        width: "100%",
        position: "relative"
    }

});
