import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyC2CrhCwW3ROv1aPwrpb5c559G7vi3YP_Y",
  authDomain: "hackathon-f4321.firebaseapp.com",
  projectId: "hackathon-f4321",
  storageBucket: "hackathon-f4321.appspot.com",
  messagingSenderId: "689770401263",
  appId: "1:689770401263:web:070ae36040d9f82326ba1a",
  measurementId: "G-ZBJ9757PPJ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

