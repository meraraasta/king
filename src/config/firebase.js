import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCfSfcJ6KaLHQtQbCCxntNG3DoT4NiftYg",
  authDomain: "game-83f49.firebaseapp.com",
  databaseURL: "https://game-83f49-default-rtdb.firebaseio.com",
  projectId: "game-83f49",
  storageBucket: "game-83f49.appspot.com",
  messagingSenderId: "581166200299",
  appId: "1:581166200299:web:d730a7d58b181ea98c15ae",
  measurementId: "G-5TGWL7YPLG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);
