import "../styles/globals.css";
import type { AppProps } from "next/app";
import Login from "../components/Login";
import { ChakraProvider } from "@chakra-ui/react";
import SideBar from "../components/SideBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
