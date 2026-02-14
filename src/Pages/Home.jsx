import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaTv,
  FaFilm,
  FaVideo,
  FaBuilding,
  FaPlane,
  FaSubway,
  FaPrint,
  FaBullhorn,
  FaAd
} from "react-icons/fa";


import "../Style/home.css";








const services = [
  { icon: <FaTv />, title: "TV Advertising" },
  { icon: <FaFilm />, title: "TVC Making" },
  { icon: <FaVideo />, title: "TV Ad Film Production" },
  { icon: <FaVideo />, title: "Web Series Production" },
  { icon: <FaBuilding />, title: "Corporate Film Production" },
  { icon: <FaBullhorn />, title: "Radio FM Advertising" },
  { icon: <FaFilm />, title: "PVR Cinemas Advertising" },
  { icon: <FaPlane />, title: "Airport Advertising" },
  { icon: <FaBullhorn />, title: "Hoardings Advertising" },
  { icon: <FaSubway />, title: "Metro Advertising" },
  { icon: <FaPrint />, title: "Print Advertising" },
  { icon: <FaAd />, title: "Digital Live Screen Advertising" }
];

const Home = () => {
  // const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % images.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

const images = [
  "/hsl1.webp",
   "/hsl2.webp",
   "/hsl3.webp",
    "/hsl4.webp",
     "/hsl5.webp",
      "/hsl6.webp",
       "/hsl7.webp",
        "/hsl8.webp",
];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);



  const secondImages = [
  "/hi2.webp",
  "/hi2.webp",
  "/hi2.webp",
  "/hi2.webp",
  "/hi2.webp",
];

const [currentSecond, setCurrentSecond] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSecond((prev) => (prev + 1) % secondImages.length);
  }, 3000); // auto-slide
  return () => clearInterval(interval);
}, []);

  return (

     <>
    <section className="slider">
      <div
        className="slider-track"
       style={{ transform: `translateX(-${current * 100}%)` }}

      >
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt="slide" />
          </div>
        ))}
      </div>
    </section>


    <section className="about-section">

      <h2 className="section-title">About & Services</h2>

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <h3>18+ Years of Excellence in Ad Film Making & TV Broadcasting</h3>

          <img src="/h1.webp" alt="About" />

          <p>
            Pooja Movie Creations is a pioneer in the world of Ad Film Making
            and TV Broadcasting. For over 18 years, we have been creating
            impactful advertising solutions that connect brands with millions
            of people across India.
          </p>

          <a href="#" className="read-more">
            Read More →
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
  <div className="services-grid">
    {services.map((service, index) => (
      <div className="service-card" key={index}>
        <div className="service-icon">{service.icon}</div>
        <h4 className="service-title">{service.title}</h4>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>




    <section className="services-section">
  <h2 className="services-heading">Our Services</h2>

  <div className="services-container">
    <div className="service-card">
      <img src="/hs1.webp" alt="Service 1" />
      <h3>TV Advertising</h3>
      <p>Expand your brand’s reach with Pooja Movie Creations’ TV Advertising. With nationwide visibility and unmatched influence, television remains...</p>
    </div>

    <div className="service-card">
      <img src="/hs2.webp" alt="Service 2" />
      <h3>TVC Making</h3>
      <p>Bring your brand vision to life with Pooja Movie Creations’ TVC Making. From concept ideation to full-scale production, we create powe...</p>
    </div>

    <div className="service-card">
      <img src="/hs3.webp" alt="Service 3" />
      <h3>TV Ad Film Production</h3>
      <p>Make your brand unforgettable with Pooja Movie Creations’ TV Ad Film Production. From creative concepts to cinematic...</p>
    </div>

    <div className="service-card">
      <img src="/hs4.webp" alt="Service 4" />
      <h3>Web Series Production</h3>
      <p>Bring stories to life with Pooja Movie Creations’ Web Series Production. From concept development to high-quality execution, we create engagin...</p>
    </div>
  </div>

   {/* Link Outside Cards */}
  <div className="services-button">
    <Link to="/services" className="main-link">
     View All Services →
    </Link>
  </div>
</section>


<section className="ipl-section">
  <h2 className="ipl-heading">IPL Advertising</h2>

  <div className="ipl-container">

    <div className="ipl-card">
      <img src="/hi.webp" alt="Stadium Branding" />
      <div className="ipl-overlay">
        <h3>Stadium Branding</h3>
        <p>Get maximum exposure during IPL matches with stadium banners, stands, and boundary rope branding...</p>
        <Link to="/stadium-branding">Read More →</Link>
      </div>
    </div>

    <div className="ipl-card">
      <img src="/hi2.webp" alt="Team Sponsorship" />
      <div className="ipl-overlay">
        <h3>LED Screen Ads</h3>
        <p>Advertise on stadium LED screens during live matches, grabbing attention of both stadium audiences...</p>
        <Link to="/team-sponsorship">Read More →</Link>
      </div>
    </div>

    <div className="ipl-card">
      <img src="/hi3.webp" alt="Digital Promotion" />
      <div className="ipl-overlay">
        <h3>IPL Players Dress Branding</h3>
        <p>With Pooja Movie Creations, your brand gets premium exposure through IPL players' jersey branding...</p>
        <Link to="/digital-promotion">Read More →</Link>
      </div>
    </div>

    <div className="ipl-card">
      <img src="/hi4.webp" alt="TV Commercials" />
      <div className="ipl-overlay">
        <h3>Digital & OTT Ads</h3>
        <p>Run targeted IPL ads on Hotstar, JioCinema, and social media platforms for engaging millions of cricket fans...</p>
        <Link to="/tv-commercials">Read More →</Link>
      </div>
    </div>

  </div>
</section>


{/* <section className="exclusive-section1">
  <h2 className="exclusive-heading1">Exclusive Advertising</h2>

  <div className="slider1">
    <div
      className="slide-track1"
      style={{ transform: `translateX(-${currentSecond * 210}px)` }} // 200px + 10px gap

    >
      {secondImages.map((img, index) => (
        <div className="slide1" key={index}>
          <img src={img} alt={`Ad ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
</section> */}



 </>

  );
};

export default Home;
