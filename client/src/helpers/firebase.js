import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEvn("VITE_FIREBASE_API"),

  authDomain: "aura-finance-website.firebaseapp.com",
  projectId: "aura-finance-website",
  storageBucket: "aura-finance-website.firebasestorage.app",
  messagingSenderId: "1062267588802",
  appId: "1:1062267588802:web:15c8adab08374d4282ab5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
