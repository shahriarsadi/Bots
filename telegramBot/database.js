const admin = require('firebase-admin');

//A serviceAccount.json file should be sent to you when you create an app on firebase
const serviceAccount = require('./path-to-your-serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://reminderbot-82bc6.firebaseio.com/'
});

const database = admin.firestore();
const settings = {
    timestampsInSnapshots: true
};
database.settings(settings);

module.exports = {
    database
}
