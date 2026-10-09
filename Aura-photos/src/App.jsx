import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";

import Navbar from "./components/layout/Navbar";

import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import PortfolioCategory from "./pages/PortfolioCategory";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/portfolio/:category"
            element={<PortfolioCategory />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;