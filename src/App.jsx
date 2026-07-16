import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <Contacts />
      </section>

      <Footer />
    </>
  );
};

export default App;