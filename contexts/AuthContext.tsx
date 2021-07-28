import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithTwitter: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Twitter Account");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL.replace("normal", "400x400"),
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithTwitter() {
    const provider = new firebase.auth.TwitterAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Twitter Account");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithTwitter }}>
      {props.children}
    </AuthContext.Provider>
  );
}
