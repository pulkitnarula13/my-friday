// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAX47cQHO80KTMMs-XlFMrU643U6K3NGy4",
    authDomain: "fir-login-c1d7c.firebaseapp.com",
    projectId: "fir-login-c1d7c",
    storageBucket: "fir-login-c1d7c.appspot.com",
    messagingSenderId: "517633006921",
    appId: "1:517633006921:web:7e982af138132b332d4e98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Authentication instance
const auth = getAuth(app);

export { auth };