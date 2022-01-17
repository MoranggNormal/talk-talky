import "../styles/globals.css";
import { ProvideAuth } from "../hooks/useAuth";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}

export default MyApp;
