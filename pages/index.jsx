import { app, database } from "../services/firebase";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

import { useAuth } from "../hooks/useAuth";

import { useState } from "react";

export default function Home() {
  const { user, signInWithGoogle, logOut } = useAuth();

  console.log(user);

  return (
    <>
      {user ? (
        <button onClick={logOut}>SignOut</button>
      ) : (
        <button onClick={signInWithGoogle}>Login</button>
      )}

      {user && <h1>Olá, {user.displayName}!</h1>}
    </>
  );
}
