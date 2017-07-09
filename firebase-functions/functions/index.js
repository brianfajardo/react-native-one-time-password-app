const admin = require('firebase-admin')
const functions = require('firebase-functions')

const serviceAccount = require('./service_account.json')
const createUser = require('./create_user')
const requestOneTimePassword = require('./request_otp')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rn-otp-auth.firebaseio.com"
})

exports.createUser = functions.https.onRequest(createUser)
exports.createUser = functions.https.onRequest(requestOneTimePassword)