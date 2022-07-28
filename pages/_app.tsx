import "../styles/globals.css";
import type { AppProps } from "next/app";
import Login from "../components/Login";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default MyApp;
