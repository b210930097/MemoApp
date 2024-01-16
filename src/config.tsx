import {initializeApp} from 'firebase/app'
import { initializeAuth, getReactNativePersistence} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: "AIzaSyBBQPBdRFbQgNsbUgRWY-BezdP7cSl5vLA",
    authDomain: "memoapp-34bf5.firebaseapp.com",
    projectId: "memoapp-34bf5",
    storageBucket: "memoapp-34bf5.appspot.com",
    messagingSenderId: "394094398811",
    appId: "1:394094398811:web:10020e4540d41e916ede7e"
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export {app, auth, db}
