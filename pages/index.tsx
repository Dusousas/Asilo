import About from "@/components/About";
import Contact from "@/components/Contact";
import Galery from "@/components/Galery";
import Main2 from "@/components/Main2";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <Main2 />
      <About />
      <Services />
      <Mission />
      <Galery />
      <Testimonials />
      <Contact />
    </>
  );
}
