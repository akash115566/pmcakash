import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "./ThemeContext";
import ScrollToTop from "../src/Pages/ScrollToTop";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../src/Pages/Navbar";
import Home from "../src/Pages/Home";


const App = () => {
  return (
   <React.StrictMode>
      <Router>
        <Navbar />
          <ScrollToTop />
        <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
 </React.StrictMode>
  );
};

export default App;
