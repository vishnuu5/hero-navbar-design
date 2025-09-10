import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogos";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CompanyLogos />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
