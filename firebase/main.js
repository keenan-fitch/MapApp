var admin = require('firebase-admin');

// obtain key certification documents
var serviceAccount = require("./mapapp-c5b1e-firebase-adminsdk-d80s8-5323b48a37.json");
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	storageBucket: "gs://mapapp-c5b1e.appspot.com"
});
var bucket = admin.storage().bucket();

// database object
let db = admin.firestore();

// get timestamp
const FieldValue = admin.firestore.FieldValue;

async function downloadFile(srcFilename, destFilename) {
    const options = {
        // The path to which the file should be downloaded, e.g. "./file.txt"
        destination: destFilename,
    };
    // Downloads the file
    await bucket.file(srcFilename).download(options);
    console.log(
        `${srcFilename} downloaded to ${destFilename}.`
    );
}
downloadFile('WechatIMG74.jpeg', 'WechatIMG74.jpeg').catch(console.error);
