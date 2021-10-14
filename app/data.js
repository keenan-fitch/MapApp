import * as firebase from "firebase";
import "firebase/firestore";
import "react-native-gesture-handler";
import React, { useState, Component, useEffect } from "react";

const firebaseConfig = {
   apiKey: "AIzaSyDXyXraHgu5hZW89RiJCd5MxcR1Ct3HAK4",
   authDomain: "uwamap-cbeb4.firebaseapp.com",
   projectId: "uwamap-cbeb4",
   storageBucket: "uwamap-cbeb4.appspot.com",
   messagingSenderId: "379875741857",
   appId: "1:379875741857:web:1a621c346fc873ff4760e0",
   measurementId: "G-08Y6D94TDZ",
};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
} else {
firebase.app(); 
}

function GetData() {
   const [users, setInfo] = useState([]); // Initial empty array of users
   useEffect(() => {
      const dbh = firebase.firestore();
      dbh
      .collection("Plaques_SmallDB")
      .get()
      .then((querySnapshot) => {
         const users = [];
         
         querySnapshot.forEach((documentSnapshot) => {
            users.push({
               ...documentSnapshot.data(),
               key: documentSnapshot.id,
            });
         });
         setInfo(users);
      });
   }, [])
   return (
      <>
        <MapView
          initialRegion={{
            latitude: -31.98093734685109,
            longitude: 115.81848976510486,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          r
          style={{ flex: 1, minHeight: windowHeight }}
          provider={PROVIDER_GOOGLE}
        >
          {users.map((i, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: i.Latitude,
                longitude: i.Longitude,
              }}
              title={i.Title}
              description={i.Description}
            />
          ))}
        </MapView>
      </>
    );
  }

export default GetData;
// export {GetData};
// info = GetData();
// export {GetData};