import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBMxChS061tWqf8n_5OKcER3xJQzmrKX-g",
  authDomain: "proj-moies.firebaseapp.com",
  projectId: "proj-moies",
  storageBucket: "proj-moies.appspot.com",
  messagingSenderId: "682963793783",
  appId: "1:682963793783:web:62ad1e6e21b5a1a5d29372"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

