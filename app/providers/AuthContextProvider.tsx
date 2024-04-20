"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

import { jwtDecode } from "jwt-decode";

interface AuthState {
  email: string | null;
  uid: string | null;
  signOut: () => Promise<void>;
}

interface TokenPayload {
  email: string;
  uid: string;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [uid, setUid] = useState<string | null>(null);

  const signOut = async () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: TokenPayload = jwtDecode<TokenPayload>(token);
      setEmail(decoded.email);
      setUid(decoded.uid);
    }
  }, []);
  
  return (
    <AuthContext.Provider value={{ email, uid, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthState => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
