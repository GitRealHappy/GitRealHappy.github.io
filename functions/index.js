/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp();

// A function that triggers when a new document is created in the "newsletter-subscribers" collection
exports.newSubscriberNotification = functions.firestore
  .document('newsletter-subscribers/{docId}')
  .onCreate((snap, context) => {
    const newValue = snap.data(); // The new data from Firestore
    const email = newValue.email; // Get the email from the document

    console.log(`New subscriber: ${email}`);

    // You can add more logic here (like sending an email notification)

    return null;
  });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
