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

// use for storage
// upload file
async function uploadFile(filename) {
    await bucket.upload(filename, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        gzip: true,
        // By setting the option `destination`, you can change the name of the
        // object you are uploading to a bucket.
        // destination: 'thisisaimage.jpg',
        metadata: {
            metadata: {
                firebaseStorageDownloadTokens: uuid()
            },
            // contentType: 'image/png',
            // Enable long-lived HTTP caching headers
            // Use only if the contents of the file will never change
            // (If the contents will change, use cacheControl: 'no-cache')
            cacheControl: 'public, max-age=31536000',
        },
    });
    // await bucket.file('portrait_brock.png').makePublic();
    console.log(`${filename} uploaded.`);
}

// download file
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

// list files
async function listFiles() {
    // Lists files in the bucket
    const [files] = await bucket.getFiles();
    console.log('Files:');
    files.forEach(file => {
        console.log(file.name);
    });
}

// delete files
async function deleteFile(filename) {
    // Deletes the file from the bucket
    await bucket.file(filename).delete();
    console.log(`${filename} deleted.`);
}


// use for database
// addData()
async function addData() {
    for (i = 1; i <= 5; i++) {
        const res = await db.collection('users').add({
            name: '用户' + i,
            sex: i % 2 == 0 ? '男' : '女',
            regdate: FieldValue.serverTimestamp()
        });
        console.log('Added document with ID: ', res.id);
    }
}
// getData()
async function getData() {
    await db.collection('users').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
}
// updData()
async function updData() {
    const userRef = db.collection('users').doc('RNd4RyaDsHE8fsQr6DV1');
    const res = await userRef.update({
        age: 25,
        upddate: FieldValue.serverTimestamp()
    });
}
// delData()
async function delData() {
    let deleteDoc = await db.collection('users').doc('RNd4RyaDsHE8fsQr6DV1').delete();
    console.log(deleteDoc)
}
