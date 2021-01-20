import firebase from 'firebase';

const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
}

firebase.initializeApp(config);

let firebaseCache

export const getUiConfig = () => ({
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
})

const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache
  }

  // firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}

export default getFirebase
