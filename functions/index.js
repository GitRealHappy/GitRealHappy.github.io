/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp();

//  triggers when new document is made in "newsletter-subscribers"
exports.newSubscriberNotification = functions.firestore
    .document("newsletter-subscribers/{docId}")
    .onCreate((snap, context) => {
      const newValue = snap.data();
      const email = newValue.email;

      console.log(`New subscriber: ${email}`);
      return null;
    });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
