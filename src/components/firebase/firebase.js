import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDli6H0Su2NiznOy0IJ516JhPKnJCLMX_I",
  authDomain: "clone-915b4.firebaseapp.com",
  projectId: "clone-915b4",
  storageBucket: "clone-915b4.appspot.com",
  messagingSenderId: "902222545403",
  appId: "1:902222545403:web:dcfba07902ae6ca3cccb5e",
  measurementId: "G-QVTEZESJ90"
}

// Initialize App
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { auth }
export default db