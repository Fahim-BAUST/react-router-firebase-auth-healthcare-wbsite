import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .finally(() => setIsLoading(false));
    }

    const signInUsingEamilAndPass = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError("Successfully Signed in");
            }).catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));

    }


    const createUserWithEmailandPass = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                updateUserProfile(name);
                setError("Create User Succesfully, Please Login");
            }).catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    const updateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            setError(error.message);
        });

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        error,
        signInUsingGoogle,
        logOut,
        signInUsingEamilAndPass,
        createUserWithEmailandPass,
    }
}

export default useFirebase;