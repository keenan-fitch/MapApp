import firebase from 'react-native-firebase';
//import { forModalPresentationIOS } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/CardStyleInterpolators';

//pod 'RNFirebase', :path => 'pod 'RNFirebase', :path => 'node_modules/react-native-firebase/ios'

firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
    }
  });

export function addPlaque(plaque, addComplete) {

  firebase.firestore()
    .collection('Plaques')
    .add({
      object: plaque.object,
      title: plaque.title,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => addComplete(data))
    .catch((error) => console.log(error));
}
export async function getPlaque(plaquesRetrieved) {

  var plaqueList = [];

  var snapshot = await firebase.firestore()
    .collection('Plaque')
    .orderBy('createdAt')
    .get()

  snapshot.forEach((doc) => {
    plaqueList.push(doc.data());
  });

  plaquesRetrieved(plaqueList)
}