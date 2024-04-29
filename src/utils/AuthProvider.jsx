
import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../components/Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserAccount = async (userData) => {
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/users", userData);
      const authResponse = await createUserWithEmailAndPassword(
        auth,
        userData?.email,
        userData?.password
      );
      setUser(authResponse.user);
      setLoading(false);
      return authResponse;
    } catch (error) {
      console.error("Error creating user account:", error);
      setLoading(false);
      throw error;
    }
  };

  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      const authResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(authResponse?.user);
      setLoading(false);
      return authResponse;
    } catch (error) {
      console.error("Error signing in user:", error);
      setLoading(false);
      throw error;
    }
  }

  const logOut = () => {
    setLoading(true);
    try {
      signOut(auth);
      setUser(null);
      setLoading(false);
    } catch (error) {
      console.error("Error signing out user:", error);
      setLoading(false);
      throw error;
    }
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser(null);
    }
    })
    return () => unSubscribe();
},[])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUserAccount,
    signInUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
