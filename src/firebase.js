import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBuDJT4aG57sGuhtkXEprFC0J5yJx5HrqM",
    authDomain: "fir-app-73065.firebaseapp.com",
    projectId: "fir-app-73065",
    storageBucket: "fir-app-73065.firebasestorage.app",
    messagingSenderId: "80786745144",
    appId: "1:80786745144:web:16d16e8a219f591ac243cd",
    databaseURL : "https://fir-app-73065-default-rtdb.firebaseio.com",
  };

  export const app = initializeApp(firebaseConfig);

