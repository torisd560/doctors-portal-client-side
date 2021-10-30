import React from 'react';
import initializeFirebaseAuthentication from '../firebase/firebase.init'
import { GoogleAuthProvider } from "firebase/auth";

initializeFirebaseAuthentication()

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    return {

    }
};

export default useFirebase;