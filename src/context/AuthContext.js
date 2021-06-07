import React, { useContext, useState, useEffect } from "react";
import { auth } from "../functions/firebaseConfig";

const CustomContext = React.createContext();

//Context provider for save the instance of daata
const AuthContext = ({ children }) => {
  const [currentUser, setUser] = useState("");

  const loginUser = async (username, password) => {
    try {
      const response = await auth.signInWithEmailAndPassword(
        username,
        password
      );
      return response;
    } catch (error) {
      alert(error);
      return error;
    }
  };

  const signinUser = async (username, password) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        username,
        password
      );
      return response;
    } catch (error) {
      alert(error);
      return error;
    }
  };

  const sendRestPasswordCode = async (email) => {
    try {
      const response = await auth.sendPasswordResetEmail(email);
      return response;
    } catch (error) {
      return error;
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      //ToDo
      alert(error);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((e) => {
      console.log("state", e);
      setUser(e);
    });
  }, []);

  const values = {
    currentUser: currentUser,
    loginUser: loginUser,
    signinUser: signinUser,
    logout: logout,
    sendRestPasswordCode: sendRestPasswordCode,
  };

  return (
    <CustomContext.Provider value={values}>{children}</CustomContext.Provider>
  );
};

export function UseAuth() {
  const context = useContext(CustomContext);
  return context;
}
export default AuthContext;
