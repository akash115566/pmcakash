import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "./ThemeContext";
import ScrollToTop from "../src/Pages/ScrollToTop";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../src/Pages/Navbar";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Service from "../src/Pages/Service";
import Work from "../src/Pages/Work";
import Award from "./Pages/Award";
import Gallery from "./Pages/Gallery";
import Client from "./Pages/Client";
import Contact from "./Pages/Contact";
import TvAdd from "./Pages/TvAdd";
import Tvc from "./Pages/Tvc";
import Tvadfilm from "./Pages/Tvadfilm";
import Web from "./Pages/Web";
import Corporate from "./Pages/Corporate";
import Radio from "./Pages/Radio";
import PVCPage from "./Pages/PVCPage";
import Airport from "./Pages/Airport";
import Hoarding from "./Pages/Hoarding";
import Metro from "./Pages/Metro";
import Print from "./Pages/Print";
import Digital from "./Pages/Digital";
import Footer from "./Pages/Footer";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Disclaimer from "./Pages/Disclaimer";
import Policy from "./Pages/Policy";
import Legal from "./Pages/Legal";
import Founder from "./Pages/Founder";
import Watch from "./Pages/Watch";
import StadiumBranding from "./Pages/Stadium-branding";
import Quote from "./Pages/Quote";
import Team from "./Pages/Team";
import Jersey from "./Pages/Jersey";
import Ott from "./Pages/Ott";
import Shoting from "./Pages/Shoting";


const App = () => {
  return (
    <React.StrictMode>
      <Router>
         <ScrollToTop />
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/work" element={<Work />} />
          <Route path="/award" element={<Award />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/client" element={<Client />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tvadd" element={<TvAdd />} />
          <Route path="/tvc" element={<Tvc />} />
          <Route path="/tvadfilm" element={<Tvadfilm />} />
          <Route path="/web" element={<Web />} />
          <Route path="/corporate-film" element={<Corporate />} />
          <Route path="/radio-fm" element={<Radio />} />
          <Route path="/pvr-advertising" element={<PVCPage />} />
          <Route path="/airport-advertising" element={<Airport />} />
          <Route path="/hoarding" element={<Hoarding />} />
          <Route path="/metro" element={<Metro />} />
          <Route path="/print" element={<Print />} />
          <Route path="/digital-screen" element={<Digital />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/stadium-Branding" element={<StadiumBranding />} />
          <Route path="/quote" element={<Quote />} />
           <Route path="/team" element={<Team />} />
            <Route path="/digital-promotion" element={<Jersey />} />
            <Route path="/ott" element={<Ott />} />
             <Route path="/shoting" element={<Shoting />} />

        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};

export default App;
