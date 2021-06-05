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
      console.log("error", error);
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

  const values = {
    currentUser: currentUser,
    loginUser: loginUser,
    logout: logout,
  };

  useEffect(() => {
    auth.onAuthStateChanged((e) => {
      console.log("state", e);
      setUser(e);
    });
  }, []);

  return (
    <CustomContext.Provider value={values}>{children}</CustomContext.Provider>
  );
};

export function UseAuth() {
  const context = useContext(CustomContext);
  return context;
}
export default AuthContext;
