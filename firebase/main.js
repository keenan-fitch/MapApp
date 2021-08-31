var uuid = require('uuid-v4');
var admin = require("firebase-admin");
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
