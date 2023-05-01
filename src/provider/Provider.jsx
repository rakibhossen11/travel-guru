import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const Provider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout = () =>{
        return signOut(auth)
    }

    const updateUserProfile = (user,name) =>{
        return updateProfile(user,{
            displayName: name
        })
        .then(() =>{
            console.log('user name update')
        })
        .catch(error => console.log(error))
    }

    const passwordReset = (email) =>{
        return sendPasswordResetEmail(auth,email);
    }

    const sendEmailVerification = (user) =>{
        return sendEmailVerification(user);
    }

    // observing the user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
            setUser(loggedUser);
        })
        return () =>{
            return unsubscribe;
        }
    },[])

    const authInfo = {
        user,
        updateUserProfile,
        createUser,
        signIn,
        passwordReset,
        sendEmailVerification,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Provider;