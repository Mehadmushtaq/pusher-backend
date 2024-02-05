const { initializeApp } = require('firebase/app');

const config = require('./config');

const firebaseApp = initializeApp(config);

module.exports = firebaseApp;
