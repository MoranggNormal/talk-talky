import { app, database } from "../services/firebase";

import nookies from "nookies";
import { useAuth } from "../hooks/useAuth";
import { verifyIdToken } from "../firebaseAdmin";

const Login = ({ storedUser }) => {
  const { signInWithGoogle, logOut, user } = useAuth();

  return (
    <>
      {storedUser ? (
        <button onClick={logOut}>SignOut</button>
      ) : (
        <button onClick={signInWithGoogle}>Login</button>
      )}

      {storedUser && <h1>Olá, {storedUser.name}</h1>}
    </>
  );
};

export default Login;

export async function getServerSideProps(context) {
  try {
    const { "talk-token": cookies } = nookies.get(context);

    const token = await verifyIdToken(cookies);

    const { email } = token;

    return {
      props: {
        storedUser: token,
      },
    };
  } catch (err) {
    console.log(err);

    return {
      props: { nada: "nada" },
    };
  }
}
