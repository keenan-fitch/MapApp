import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, ScrollView, View, Linking} from 'react-native';


function About(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/#ececec.png')}>
            <ScrollView style={styles.scrollV}>
                <Text style={styles.aboutTitle}> About the UWHS</Text>

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
                <Image style={styles.imageW} source={require("../assets/winthrop.jpeg")} ></Image>
                <Text style={styles.aboutBody}>
                    {"\n"}
                    From small leaflets commemorating the Old Dolphin Theatre, Anniversaries of the Sunken Garden Amphitheatre, the Octagon and New Fortune theatres, more substantial publications have been created by the small group of volunteers. ‘Personalities and Places on the Crawley Campus’ has already needed a reprint.
                    {"\n"}
                </Text>
                <Text style={styles.aboutBody}>
                    The University Archivist is an ex-officio member of the annually elected working Committee. The membership fee is modest and open to all interested in the Society’s aims.
                    {"\n"}
                </Text>
                <Text style={styles.aboutBody}>
                    Please check the website for further information. 
                    {"\n"}
                </Text>

                <Text style={{color:'blue', width: "80%", top: 80, borderRadius: 25,alignSelf: "center", fontSize:  16,position: "relative",}} //Does not accept styles.aboutbody
                        onPress={() => Linking.openURL('https://www.web.uwa.edu.au/uwahs')}>
                    Tap to go to the UWAHS Website!
                    {"\n"}
                </Text>
                <Text style={styles.aboutBody}>
                Developed by Group 36.
                {"\n"}
                </Text>              
                <Text style={styles.aboutBody}> 
                    Benny Ha - email@email.com {"\n"}
                    Jess Gugliotta- email@email.com {"\n"}
                    Jiayu Wu - email@email.com {"\n"}
                    Jordan Lee - email@email.com {"\n"}
                    Keenan Fitch - email@email.com {"\n"}
                    {"\n"}
                </Text>

                <Text style={styles.aboutBody}> 
                    Bibliography:
                    {"\n"}
                </Text>
                
                <Text style={styles.bibloBody}> 
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
    
    aboutBody: {
        width: "80%",
        top: 80,
        borderRadius: 25,
        alignSelf: "center",
        fontSize:  16,
        position: "relative",
    },
    aboutTitle: {
        width: "80%",
        top: 40,
        borderRadius: 25,
        alignSelf: "center",
        fontSize:  30,
        position: "relative",
        textAlign: "center",
        fontFamily: "Futura",
       // fontWeight: "bold",
        // letterSpacing: 10,
    },
    bibloBody: {
        width: "80%",
        top: 80,
        borderRadius: 25,
        alignSelf: "center",
        fontSize:  7,
        position: "relative",
    },
    scrollV: {
        flex: 1,
        width: "100%",
        position: "relative",
    }

});