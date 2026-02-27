import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "./ThemeContext";
import ScrollToTop from "../src/Pages/ScrollToTop";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../src/Pages/Navbar";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Service from "../src/Pages/Service";


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
        </Routes>
        {/* <Footer /> */}
      </Router>
 </React.StrictMode>
  );
};

export default App;
