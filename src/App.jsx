import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journals from "./components/Journals";
import Ebooks from "./components/Ebooks";
import Contact from "./components/Contact";
import "./styles/main.css";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Journals />
      <Ebooks />
      <Contact />
      <ScrollTop />
      <Footer />

    </>
  );
}

export default App;