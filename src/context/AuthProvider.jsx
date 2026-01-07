import React, { useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from '../Firebase/firebase.init'
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const resetPassword = (email) => {
  setLoading(true);
  return sendPasswordResetEmail(auth, email);
};


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>unsubscribe();
    },[]);

     const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUser,
    resetPassword
  };


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;