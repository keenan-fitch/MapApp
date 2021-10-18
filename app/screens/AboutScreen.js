import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView, Linking } from 'react-native';
import { useFonts, Merriweather_300Light, Merriweather_300Light_Italic, Merriweather_400Regular, Merriweather_400Regular_Italic,
    Merriweather_700Bold, Merriweather_700Bold_Italic, Merriweather_900Black, Merriweather_900Black_Italic } from '@expo-google-fonts/merriweather';
  
const url="https://www.web.uwa.edu.au/uwahs"

function About(props) {
    let [fontsLoaded, error] = useFonts({
        Merriweather_300Light, 
        Merriweather_400Regular, 
        Merriweather_700Bold, 
        Merriweather_900Black,
        Merriweather_300Light_Italic, 
        Merriweather_400Regular_Italic, 
        Merriweather_700Bold_Italic, 
        Merriweather_900Black_Italic,
      });
    return (
        <ImageBackground style={styles.background} source={require('../assets/#ececec.png')}>
            <ScrollView style={styles.scollV}>
            <Text style={styles.aboutTitle}> ABOUT THE UWAHS</Text>
                <Image style={styles.logo} source={{uri: "https://crowdresearch.uwa.edu.au/wp-content/uploads/2015/12/cropped-uwa-crest-512.png",}}>
                </Image>
                <Text style={styles.aboutBody}>
                    The UWA Historical Society commenced in 2008 from the initiatives of a small group led by Prof Reg Appleyard and the then Heritage Officer, Shobha Cameron. It received founding financial assistance from the Convocation of UWA graduates, and the support of Vice-Chancellor Prof. Alan Robson. The first event was a public lecture by Robert French, the Chief Justice of the High Court of Australia.
                    {"\n"}
                </Text>
                <Text style={styles.aboutBody}>
                    Further distinguished graduates and staff offered Annual Lectures in the lead-up to the University Centenary celebrations. The Society has conducted seminars on ‘The Founding Professors’ and numerous ‘walking tours’ of the historical architectural features of the Crawley Campus, together with associated publications. 
                    {"\n"}
                </Text>

                <Text style={styles.aboutBody}>
                    An extensive professional quality Oral History program has been vigorously pursued. A number of initiatives such as an annual ceremony to mark Remembrance Day, in conjunction with the University Regiment, the renewal of the WW1 Honour Board.
                    {"\n"}
                </Text>

                <Image style={styles.imageW} source={require("../assets/ABOUT_IMAGE.jpeg")} ></Image>
                <Text style={styles.aboutImageComment}>
                    Opening of Hackett Memorial Buildings - 15 April 1932 (UWA Archives 1975P courtesy of West Australian Newspapers Ltd)
                </Text>

                <Text style={styles.aboutBody3}>
                    From small leaflets commemorating the Old Dolphin Theatre, Anniversaries of the Sunken Garden Amphitheatre, the Octagon and New Fortune theatres, more substantial publications have been created by the small group of volunteers. ‘Personalities and Places on the Crawley Campus’ has already needed a reprint.
                    {"\n"}
                </Text>
                <Text style={styles.aboutBody2}>
                    {"\n"}
                    The University Archivist is an ex-officio member of the annually elected working Committee. The membership fee is modest and open to all interested in the Society’s aims.
                    {"\n"}
                </Text>
                <Text style={styles.aboutBody2}>
                    {"\n"}
                    Please check the website for further information. 
                </Text>

                <Text style={{color:'blue', width: "80%", top: 0, borderRadius: 25,alignSelf: "center", fontSize:  16,position: "relative",}} //Does not accept styles.aboutbody
                        onPress={() => Linking.openURL('https://www.web.uwa.edu.au/uwahs')}>
                    Tap to go to the UWAHS Website!
                </Text>

                <Text style={styles.aboutBody}>
                Developed by Group 36.{"\n"}

                </Text>              
                <Text style={styles.emailBody}> 
                    Benny Ha - 22713623@student.uwa.edu.au {"\n"}
                    Jess Gugliotta - 22727757@student.uwa.edu.au {"\n"}
                    Jiayu Wu - 22713623@student.uwa.edu.au {"\n"}
                    Jordan Lee - 22705507@student.uwa.edu.au {"\n"}
                    Keenan Fitch - 22705507@student.uwa.edu.au {"\n"}
                    {"\n"}{"\n"}{"\n"}{"\n"}
                </Text>
                <View>
                    <Text style={styles.referencesTitle}>
                        {"\n"}{"\n"}{"\n"}{"\n"}
                        Bibliography:
                    </Text>
                
                    <Text style={styles.biblioBody}> 
                    5 Lamps of Knowledge (Image) Library Team, 2021. Archive collections. [online] UWA. Available at: https://www.uwa.edu.au/library/find-resources/records-and-archives/archive-collections [Accessed 14 October 2021]. {"\n"}{"\n"}
                    Anechoic Chamber (Image and Description) Prisco, J., 2021. Inside the world's quietest room. [online] CNN. Available at: https://edition.cnn.com/style/article/anechoic-chamber-worlds-quietest-room/index.html [Accessed 14 October 2021]. {"\n"}{"\n"}
                    Berndt Museum of Anthropology (Image and Description), Mayman, J., 2021. 'I want to tell my children': The history hidden in Berndt's notebooks. [online] Smh.com.au. Available at: https://www.smh.com.au/national/i-want-to-tell-my-children-the-history-hidden-in-berndt-s-notebooks-20181211-p50lg3.html [Accessed 14 October 2021]. {"\n"}{"\n"}
                    The Boat Shed (Description) Campus News, 1994: 13(20): 3; Ferguson, R.J. (1993) Crawley Campus. {"\n"}{"\n"}
                    George Munns (Description) Seddon, G. and Lilleyman, G., 2006. A Landscape for Learning. 1st ed. Perth: UWA Press. {"\n"}{"\n"}
                    Japanese Garden (Image) Mark Evans, UWA Friends of the Grounds 2009 Photographic Competition. {"\n"}{"\n"}
                    Japanese Garden (Description) Seddon, G. and Lilleyman, G., 2006. A Landscape for Learning. 1st ed. Perth: UWA Press, p.124. {"\n"}{"\n"}
                    Plant Form (Image) Library Team, 2021. Archive collections. [online] UWA. Available at: https://www.uwa.edu.au/library/find-resources/records-and-archives/archive-collections [Accessed 14 October 2021]. {"\n"}{"\n"}
                    Prof. H.E. Whitfeld (Image) Library Team, 2021. Archive collections. [online] UWA. Available at: https://www.uwa.edu.au/library/find-resources/records-and-archives/archive-collections [Accessed 14 October 2021]. {"\n"}{"\n"}
                    Queen and Duke Trees (Image) Library Team, 2021. Archive collections. [online] UWA. Available at: https://www.uwa.edu.au/library/find-resources/records-and-archives/archive-collections [Accessed 14 October 2021]. {"\n"}{"\n"}
                    Rodney Alsop Memorial (Image) Library Team, 2021. Archive collections. [online] UWA. Available at: https://www.uwa.edu.au/library/find-resources/records-and-archives/archive-collections [Accessed 14 October 2021]. {"\n"}{"\n"}
                    Sir Stanley Prescott (Image) photograph provided by Nigel Prescott ADB; Pope, J and Birman, W and Bodycoat R Personalities and Places on Crawley Campus UWAHS 2013. {"\n"}{"\n"}
                    Socrates (Image) Library Team, 2021. Archive collections. [online] UWA. Available at: https://www.uwa.edu.au/library/find-resources/records-and-archives/archive-collections [Accessed 14 October 2021]. {"\n"}{"\n"}
                    Whelan Court (Image) Glover, W. E., 'Robert Ford Whelan 1922-1984', Historical Records of Australian Science, 6 (3) (1986), 409-421. {"\n"}{"\n"}
                    Whitfeld Court (Image) Library Team, 2021. Archive collections. [online] UWA. Available at: https://www.uwa.edu.au/library/find-resources/records-and-archives/archive-collections [Accessed 14 October 2021]. {"\n"}{"\n"}
                    Winthrop Hall (Image) Library Team, 2021. Archive collections. [online] UWA. Available at: https://www.uwa.edu.au/library/find-resources/records-and-archives/archive-collections [Accessed 14 October 2021]. {"\n"}{"\n"}{"\n"}
                    </Text>
                <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                </View>

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
        borderRadius: 25,
        alignSelf: "center",
        fontSize:  18,
        position: "relative",
        color: "black",
        fontFamily: "Merriweather_300Light",
    },
    biblioBody: {
        width: "80%",
        top: 0,
        borderRadius: 25,
        alignSelf: "center",
        fontSize:  16,
        position: "relative",
        fontStyle: 'italic',
        color: "black",
        fontFamily: "Merriweather_300Light",
    },
    emailBody: {
        width: "80%",
        top: 90,
        borderRadius: 25,
        alignSelf: "center",
        fontSize:  14,
        position: "relative",
        color: "black",
        lineHeight: 20,
        fontFamily: "Merriweather_300Light",
    },
    aboutBody2: {
        width: "80%",
        top: -50,
        borderRadius: 25,
        alignSelf: "center",
        fontSize:  18,
        position: "relative",
        color: "black",
        fontFamily: "Merriweather_300Light",
    },
    referencesTitle: {
        width: "80%",
        top: -50,
        borderRadius: 25,
        alignSelf: "center",
        fontSize:  18,
        position: "relative",
        color: "black",
        fontFamily: "Merriweather_300Light",
        fontWeight: 'bold',
    },
    aboutBody3: {
        width: "80%",
        top: -50,
        borderRadius: 25,
        alignSelf: "center",
        fontSize:  18,
        position: "relative",
        color: "black",
        fontFamily: "Merriweather_300Light",
    },
    
    aboutImageComment: {
        marginHorizontal: "10%",
        top: -80,
        fontSize:  12,
        position: "relative",
        color: "black",
        fontFamily: "Merriweather_300Light",
    },
    // imageContainer: {
        // flex: 1,
        // backgroundColor: "red",
        // width: "80%",
        // height: '20%',
        // alignSelf: 'center',
        // alignItems: 'center',
        // justifyContent: 'center'
        // height: 300
    // },
    imageW: {
        width: "80%",
        resizeMode: 'contain',
        position: 'relative',
        alignSelf: "center",
        alignContent: "flex-end"
    },
    
    aboutHyperlink: {
        width: "80%",
        top: 90,
        borderRadius: 25,
        alignSelf: "center",
        fontSize:  18,
        position: "relative",
        color: "blue",
        fontFamily: "Merriweather_300Light",
    },
    aboutTitle: {
        width: "90%",
        top: 40,
        borderRadius: 25,
        alignSelf: "center",
        fontSize:  32,
        position: "relative",
        textAlign: "center",
        fontFamily: "Merriweather_300Light",
    },
    scollV: {
        width: "100%",
        position: "relative",
        height: 1000,
    }

});
