import "../styles/globals.css";
import type { AppProps } from "next/app";
import Login from "../components/Login";
import { ChakraProvider } from "@chakra-ui/react";
import SideBar from "../components/SideBar";

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <ChakraProvider>
      <SideBar />
    </ChakraProvider>
  );
}

export default MyApp;
