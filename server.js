// server.js (Initialization at the very top)
const express = require('express');
const admin = require('firebase-admin'); // ADD THIS
const serviceAccount = require('./serviceAccountKey.json'); // ADD THIS

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // IMPORTANT: Replace the URL with your actual Firebase Realtime Database URL
  databaseURL: "https://YOUR-FIREBASE-PROJECT-ID.firebaseio.com" 
});

const db = admin.database(); // Use this object to interact with the database

const app = express();
// ... rest of the server code