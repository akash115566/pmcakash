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
                          <Route path="/tvadd" element={<TvAdd />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
 </React.StrictMode>
  );
};

export default App;
