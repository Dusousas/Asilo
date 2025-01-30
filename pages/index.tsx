import About from "@/components/About";
import Contact from "@/components/Contact";
import Galery from "@/components/Galery";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Services />
      <Mission />
      <Galery />
      <Testimonials />
      <Contact />
    </>
  );
}
