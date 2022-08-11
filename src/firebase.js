// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBHsb3hjf7P3uZVDpmnxaktCMwqtX7ryfM',
  authDomain: 'react-2022-7cc68.firebaseapp.com',
  projectId: 'react-2022-7cc68',
  storageBucket: 'react-2022-7cc68.appspot.com',
  messagingSenderId: '721419516668',
  appId: '1:721419516668:web:cb7f520e4d924834eff579',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
