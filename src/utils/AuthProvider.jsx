
import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
        userData.email,
        userData.password
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

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUserAccount,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
