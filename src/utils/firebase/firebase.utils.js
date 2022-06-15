import {initializeApp} from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD_YuTPy-9QuIG1xAdDYm3LP_UTIlEDcn4",
  authDomain: "crown-clothing-db-d4bc6.firebaseapp.com",
  projectId: "crown-clothing-db-d4bc6",
  storageBucket: "crown-clothing-db-d4bc6.appspot.com",
  messagingSenderId: "370626837869",
  appId: "1:370626837869:web:4c9c5d2fa24dbcde916e64"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
