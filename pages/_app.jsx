import "../styles/globals.scss";
import { ProvideAuth } from "../hooks/useAuth";
import { app } from "../services/firebase";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}

export default MyApp;
