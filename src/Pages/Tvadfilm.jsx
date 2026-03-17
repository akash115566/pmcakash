import React from "react";
import "../Style/tvadfilm.css";

const services = [
  {
    img: "/af1.webp",
    title: "Corporate Films",
    desc: "Showcase your company’s vision, mission, and success stories through impactful corporate films.",
  },
  {
    img: "/af2.webp",
    title: "Product Shoots",
    desc: "Highlight your products with creative video and photo shoots that attract customers instantly.",
  },
  {
    img: "/af3.webp",
    title: "Event Promotions",
    desc: "From concept to execution, promote your events with effective marketing campaigns.",
  },
  {
    img:"/af4.webp",
    title: "Digital Ads",
    desc: "Engage audiences online with high-quality video ads tailored for social media and digital platforms.",
  },
  {
    img: "/af5.webp",
    title: "Brand Storytelling",
    desc: "Deliver your brand’s message through compelling stories that leave a lasting impression.",
  },
  {
    img: "/af6.webp",
    title: "Animation & Motion Graphics",
    desc: "Enhance your campaigns with modern animation, VFX, and motion graphics to stand out.",
  },
];





const services4 = [
  {
    img: "/af7.webp",
    title: "Satisfied Clients",
   
  },
  {
    img: "/af8.webp",
    title: "Satisfied Clients",
   
  },
  {
    img: "/af9.webp",
    title: "Satisfied Clients",
    
  },
  {
    img:"/af10.webp",
    title: "Satisfied Clients",
   
  },
  {
    img: "/af11.webp",
    title: "Satisfied Clients",
   
  },
  {
    img: "/af12.webp",
    title: "Satisfied Clients",
    
  },
];

const clients = [
  { img: "/af7.webp", name: "Satisfied Clients" },
  { img: "/af8.webp", name: "Satisfied Clients" },
  { img: "/af9.webp", name: "Satisfied Clients" },
  { img: "/af10.webp", name: "Satisfied Clients" },
  { img: "/af11.webp", name: "Satisfied Clients" },
  { img: "/af12.webp", name: "Satisfied Clients" },
];


const TvadFilm = () => {
  return (
    <>
  
    <div>

      {/* ===== Banner Section ===== */}
      <section className="tva-banner">
        <div className="overlay">
          <h1>TV Ad Film Production</h1>
          <p>Producing High-Impact TV Advertisements for Brands Worldwide</p>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="about-section">
        <h2>About TV Ad Film Production</h2>
        <p>
          Our TV Ad Film Production services ensure professional, creative,
          and impactful advertising films that engage audiences and enhance
          brand recognition.
        </p>
      </section>

      {/* ===== Services Section ===== */}
      <section className="services-section">
        <div className="services-container">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>







     <section className="about-section4">
        <h2>Our Clients</h2>
      
      </section>

      {/* ===== Services Section ===== */}
      <section className="services-section4">
        <div className="services-container4">
          {services4.map((item, index) => (
            <div className="service-card4" key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            
            </div>
          ))}
        </div>
      </section>



      </>
  );
};

export default TvadFilm;