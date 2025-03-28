import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head"; 
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Missono - Casa de Repouso</title>
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
