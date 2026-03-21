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


const App = () => {
  return (
   <React.StrictMode>
      <Router>
        <Navbar />
          <ScrollToTop />
        <Routes>
           <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
               <Route path="/service" element={<Service />} />
                <Route path="/work" element={<Work />} />
                  <Route path="/award" element={<Award />} />
                  <Route path="/gallery" element={<Gallery />} />
                     <Route path="/client" element={<Client />} />
                       <Route path="/contact" element={<Contact />} />
                          <Route path="/TvAdd" element={<TvAdd />} />
                          <Route path="/tvc" element={<Tvc />} />
                             <Route path="/tvadfilm" element={<Tvadfilm />} />
                              <Route path="/web" element={<Web />} />
                               <Route path="/corporate-film" element={<Corporate />} />
                                 <Route path="/radio-fm" element={<Radio />} />
                                  <Route path="/pvr-advertising" element={<PVCPage />} />
                                   <Route path="/airport-advertising" element={<Airport />} />
                                     <Route path="/airport-advertising" element={<Hoarding />} />
                               
        </Routes>
        {/* <Footer /> */}
      </Router>
 </React.StrictMode>
  );
};

export default App;
