import About from "./Components/About/page";
import IsmHeader from "./Components/Header/Header";
import Hero from "./Components/Hero/page"
import Service from "./Components/Service/page";
import Contact from "./Components/Contact/page";
import Footer from "./Components/footer/Footer"
import Portfolio from "./Components/Portfolio/page";

export default function Home() {
  return (
    <div>
      <IsmHeader/>
      <Hero/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}
