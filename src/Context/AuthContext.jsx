import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config.js";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const googleProvider = new GoogleAuthProvider();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register a user
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // Login a user
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  //   Sign Up a user using Google
  const signInWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  // Manage the current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);

      if (user) {
        const { displayName, email, photoURL } = user;
        const userData = {
          username: displayName,
          email,
          photo: photoURL,
        };
      }
    });

    return () => unsubscribe();
  }, []);

  // Logout a user
  const logoutUser = async () => {
    return await signOut(auth);
  };

  const value = {
    loading,
    currentUser,
    registerUser,
    loginUser,
    signInWithGoogle,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
