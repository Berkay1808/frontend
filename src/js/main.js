// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBMQ4X4EZWhxUFgZgUUrVi7EaCuh91cLBM',
  authDomain: 'quattro-hu.firebaseapp.com',
  databaseURL: 'https://quattro-hu-default-rtdb.firebaseio.com',
  projectId: 'quattro-hu',
  storageBucket: 'quattro-hu.appspot.com',
  messagingSenderId: '314076768',
  appId: '1:314076768:web:68b6c2c0964d03c0179d05',
  measurementId: 'G-N9TCZCKQG9'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const users = [
  { username: 'gebruiker', password: 'wachtwoord', role: 'gebruiker', email: 'gebruiker@example.com' },
  { username: 'admin', password: 'wachtwoord', role: 'admin', email: 'admin@example.com' }
];

function authenticateUserByEmail(email, password) {
  return users.find(user => user.email === email && user.password === password);
}

export { users, authenticateUserByEmail };