"use client";
import { createContext, useEffect, useState } from "react";
import { me } from "../actions/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const data = await me();
      if (data?.error) {
        setUser(null);
      } else {
        setUser(data.user);
      }
    };
    checkUserLoggedIn();
  }, []);

  const loginContext = (user) => {
    setUser(user);
  };
  const logoutContext = () => {
    setUser(null);
  };

  return (
    <>
      <AuthContext.Provider value={{ user, logoutContext ,loginContext }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
