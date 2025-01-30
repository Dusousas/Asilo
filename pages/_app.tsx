import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";  // Importe seu componente de Header
import Footer from "@/components/Footer";  // Importe seu componente de Footer

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
