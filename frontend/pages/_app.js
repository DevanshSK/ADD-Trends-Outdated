import "../styles/globals.css";
import { StateContext } from "../lib/context";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </StateContext>
  );
}

export default MyApp;
