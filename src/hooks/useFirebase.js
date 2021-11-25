import initializeFirebaseAuthentication from '../firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeFirebaseAuthentication()

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    //==========get email , password, Name========
    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleUserName = e => setName(e.target.value)
    // ============ set user =================
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
    }
    // ========handleLogin=============
    const handleLogin = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('')
            })
            .catch(error => setError(error.message))
        if (password.length < 6) {
            setError('Password must have at least 6 character')
            return;
        }
    }
    //==========handleSignup=========================
    const handleSignUp = e => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setUserName()
                setError('')
            })
            .catch(error => setError(error.message))
        if (password.length < 6) {
            setError('Password must have at least 6 character')
            return;
        }
    }
    // ==============Google Sign In function===============
    const handleGoogleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }
    // ===============OnAuth stateChange function=============
    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubcribed;
    }, [])
    //=============== LogOut function==============
    const logOut = () => {
        // setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }
    // ==============reset password================
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setError('')
            })
            .catch(error => setError(error.message))
    }

    return {
        handleSignUp,
        handleLogin,
        handleGoogleSignIn,
        handleUserName,
        handleEmail,
        handlePassword,
        logOut,
        resetPassword,
        user,
        error,
        isLoading
    }
};

export default useFirebase;