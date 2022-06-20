import {initializeApp} from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

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


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid );
  const userSnapShot = await getDoc(userDocRef);
 
  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    }catch (err){
      console.log('error creating the user', err.message);

    }
  }

  return userDocRef;
}