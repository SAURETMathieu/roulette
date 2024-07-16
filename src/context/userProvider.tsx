"use client";

import React, { useContext, useState, useEffect, createContext, ReactNode } from 'react';
import { createClient } from '@/src/lib/supabase/client';
import { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
}

// create a context for authentication
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const supabaseClient = createClient();
  // create state values for user data and loading
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data:{ session }, error } = await supabaseClient.auth.getSession();
      if (error) {
        console.error("Error fetching user: ", error);
        return null;
      }
      return session?.user ?? null;
    }

    const initializeUser = async () => {
      const currentUser = await getUser();
      setUser(currentUser);
      setLoading(false);
    };

    initializeUser();

    // listen for changes to auth
    const { data: listener } = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // cleanup the useEffect hook
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [supabaseClient]);

  const value = {
    user,
  };

  // use a provider to pass down the value
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// export the useAuth hook
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
