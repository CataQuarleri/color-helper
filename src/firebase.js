import firebase from 'firebase/compat/app'
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAKs6_jGyAn8cp1_r6XFbRdnM2jge4gE8M",
    authDomain: "color-helper-dev.firebaseapp.com",
    projectId: "color-helper-dev",
    storageBucket: "color-helper-dev.appspot.com",
    messagingSenderId: "559738527508",
    appId: "1:559738527508:web:7197fbfc426a1ba088ac01",
    measurementId: "G-56N9K7DESB"
})

export const auth = app.auth();
export default app;
const analytics = getAnalytics(app);
