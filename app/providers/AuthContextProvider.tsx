import React, { createContext, useEffect, useState, ReactNode } from "react";
import { jwtDecode } from "jwt-decode";

interface IAuthContext {
  userUid: string;
  userRole: string;
  userName: string;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userUid, setUserUid] = useState<string>("");
  const [userRole, setUserRole] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken.role);
      setUserUid(decodedToken.uid);
      setUserName(decodedToken.userName);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userRole, userUid, userName }}>
      {children}
    </AuthContext.Provider>
  );
};
