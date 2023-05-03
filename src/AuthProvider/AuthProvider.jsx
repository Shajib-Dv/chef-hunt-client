/** @format */
import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  const googleAuth = new GoogleAuthProvider();
  const githubAuth = new GithubAuthProvider();

  // sign up
  const userSignUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in with google

  const googleSignIn = () => {
    return signInWithPopup(auth, googleAuth);
  };

  //sign in with github
  const gitHubSignIn = () => {
    return signInWithPopup(auth, githubAuth);
  };

  // sign in
  const userSignIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //log out
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  // user track

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoader(false);
    });

    return () => unSubscribe();
  }, []);

  //auth info
  const authInfo = {
    user,
    userSignUp,
    googleSignIn,
    gitHubSignIn,
    userSignIn,
    logOut,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
