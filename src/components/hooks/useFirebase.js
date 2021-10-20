import { useEffect } from 'react'
import initializeFirebaseAuthentication from '../../firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useState } from 'react';


initializeFirebaseAuthentication()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading , setIsLoading] = useState(true)

    const auth = getAuth();

    const handleGoogleSignIn = () => {
        setIsLoading(true)
         return signInWithPopup(auth, googleProvider)

            .finally(()=>setIsLoading(false))
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
    }

    const handleEmail = e => {
        setEmail(e.target.value)
        
    }
    const handlePassword = e => {
        setPassword(e.target.value)
       
    }
    const handleLogin = e => {
        e.preventDefault()
       createUserWithEmailAndPassword(auth, email, password)
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

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error=>setError(error.message))
            .finally(()=>setIsLoading(false))
    }

    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setError('')
            })
            .catch(error => setError(error.message))
    }

    return {
        handleGoogleSignIn,
        handleNameChange,
        handleEmail,
        handlePassword,
        handleLogin,
        handleSignUp,
        logOut,
        resetPassword,
        user,
        error,
        isLoading
    }
};
export default useFirebase;