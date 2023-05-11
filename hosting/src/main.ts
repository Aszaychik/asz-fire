import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth/cordova';

const auth = getAuth();
const button = document.getElementById('firebase-auth-button');

onAuthStateChanged(auth, (user: object) => {
  if (user === null) {
    return console.log('No user');
  }
  console.log(user);
});

button?.addEventListener('click', (event) => {
  signInWithPopup(auth, new GoogleAuthProvider());
});
