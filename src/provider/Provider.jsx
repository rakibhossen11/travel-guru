import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const Provider = ({children}) => {

    const createUser = (email,password) =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => console.log(error))
    }

    const signIn = (email,password) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            const loggeduser = result.user;
            console.log(loggeduser);
        })
        .catch(error => console.log(error))
    }

    const logout = () =>{
        signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        signIn,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Provider;