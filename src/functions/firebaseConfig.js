import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhV-7a1LMWAFuMedc_S4avifQo0iamLiY",
  authDomain: "simple-gallery-c6f9b.firebaseapp.com",
  projectId: "simple-gallery-c6f9b",
  storageBucket: "simple-gallery-c6f9b.appspot.com",
  messagingSenderId: "612642835016",
  appId: "1:612642835016:web:c67401214b3db60d26a67d",
};

const app = firebase.initializeApp(firebaseConfig);
export default app;
export const auth = firebase.auth();
