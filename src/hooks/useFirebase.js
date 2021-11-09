import { useEffect, useState } from 'react'
import initializeFirebase from '../Pages/Login/Firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";


initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const auth = getAuth()
    const googleprovider = new GoogleAuthProvider();

    // google sign in method
    const signInWithGoogle = (location, history) => {
        setIsLoading(true)

        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/'
                history.push(destination)
                setError("")
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }


    // Register method
    const handleRegister = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setUser(newUser)

                // save user to database
                saveUser(email, name, 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => { })
                    .catch((error) => setError(error.message));
                history.replace('/')
                setError("")
            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    // Login method
    const handleLogin = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.push(destination)
                setError("")

            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    // observer state
    useEffect(() => {
        setIsLoading(true)
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => setToken(idToken))
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth])

    // LogOut method 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setError("")
        })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false))
    }
    // save user to database 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch(`http://localhost:5000/users`, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    // get data for admin user
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])




    return {
        user,
        error,
        isLoading,
        admin,
        token,
        signInWithGoogle,
        logOut,
        handleRegister,
        handleLogin

    }
}

export default useFirebase;