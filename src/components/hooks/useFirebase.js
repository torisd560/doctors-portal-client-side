import { useEffect } from 'react'
import initializeFirebaseAuthentication from '../../firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useState } from 'react';


initializeFirebaseAuthentication()
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const auth = getAuth();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)

            .then(result => setUser(result.user))
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
    }

    const handleEmail = e => {
        setEmail(e.target.value)
        console.log(email)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
        console.log(password)
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
        })
        return () => unsubcribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
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
        handleGithubSignIn,
        handleNameChange,
        handleEmail,
        handlePassword,
        handleLogin,
        handleSignUp,
        logOut,
        resetPassword,
        user,
        error
    }
};
export default useFirebase;