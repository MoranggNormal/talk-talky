import { app, database } from "../services/firebase";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

import { useAuth } from "../hooks/useAuth";

import { useState, useEffect } from "react";

export default function Home() {
  const [test, setTest] = useState([]);

  const { user, signInWithGoogle, signOutt } = useAuth();

  console.log(user);

  return (
    <>
      {user ? (
        <button onClick={signOutt}>SignOut</button>
      ) : (
        <button onClick={signInWithGoogle}>Login</button>
      )}

      {user && <h1>Olá, {user.displayName}!</h1>}
    </>
  );
}
