import About from "@/components/About";
import Contact from "@/components/Contact";
import Galery from "@/components/Galery";
import Main from "@/components/Main";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Whatsapp from "@/components/Whatsapp";


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
      <Whatsapp />
    </>
  );
}
