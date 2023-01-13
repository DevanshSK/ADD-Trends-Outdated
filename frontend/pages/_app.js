import "../styles/globals.css";
import { StateContext } from "../lib/context";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <StateContext>
      <Toaster />

        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
