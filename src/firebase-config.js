import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBaTcTVrYBwoXU4WYyTcaZDeoHXL-gTeWI",
    authDomain: "blogsmongodbsite.firebaseapp.com",
    projectId: "blogsmongodbsite",
    storageBucket: "blogsmongodbsite.appspot.com",
    messagingSenderId: "321466303376",
    appId: "1:321466303376:web:12955aa0803b4a269a2915"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()