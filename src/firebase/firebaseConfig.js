import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCL6OF7oupHwRf5v6wf_Siv-hsp87etV6g",
  authDomain: "inventory-tracker-app-110326.firebaseapp.com",
  databaseURL: "https://inventory-tracker-app-110326-default-rtdb.firebaseio.com",
  projectId: "inventory-tracker-app-110326",
  storageBucket: "inventory-tracker-app-110326.firebasestorage.app",
  messagingSenderId: "977797594163",
  appId: "1:977797594163:web:e0861b5284e141f9bff746",
  measurementId: "G-NFTETK8Q0X"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);