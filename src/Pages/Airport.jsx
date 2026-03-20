import React from "react";
import "../Style/airport.css";

const cards1 = [
  {
    img: "/ar1.webp",
    title: "International Outdoor Hoardings",
    // subtitle: "Big Screen Ads",
    desc: "Premium outdoor billboard displays at international terminals and departure areas. High-impact visibility for global travelers."
  },
  {
    img: "/ar2.avif",
    title: "Domestic Outdoor Hoardings",
    // subtitle: "Small Screen Ads",
    desc: "Strategic outdoor advertising placements at domestic terminals and gates. Perfect for targeting local and regional travelers."
  },
  {
    img: "/ar3.webp",
    title: "Check Plate Tray Advertisement",
    // subtitle: "Standee Ads",
    desc: "Innovative ads on security check trays that passengers use during screening. Guaranteed visibility during mandatory checks."
  },
  {
    img: "/ar4.webp",
    title: "Boarding Pass Advertisement",
    // subtitle: "Popcorn Bucket Ads",
    desc: "Direct marketing through boarding pass ads. Your brand travels with passengers ensuring lasting brand recall."
  },
  {
    img: "/ar5.webp",
    title: "In-Flight Advertisement",
    // subtitle: "Lobby & Restroom Ads",
    desc: "Premium advertising inside aircraft including seat-back displays, bins, and announcements for captive audience engagement."
  },
  {
    img: "/ar6.webp",
    title: "Flight Magazine Advertisement",
    // subtitle: "Seat Back Ads",
    desc: "High-quality print ads in airline magazines. Reach engaged passengers during flights with detailed brand messaging."
  }
];

const features1 = [
  {
    title: "Premium Audience",
    desc: "Target business leaders, international travelers, and high-spending customers."
  },
  {
    title: "Global Exposure",
    desc: "Airports are international gateways – your brand is seen worldwide."
  },
  {
    title: "High Dwell Time",
    desc: "Travelers spend hours at airports, ensuring repeated brand exposure."
  },
  {
    title: "Prestige Factor",
    desc: "Airport ads enhance brand image with a premium and trusted perception."
  }
];

const Airport = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="pvc-hero">
        <div className="overlay">
          <h1>AirPort Cinema Advertising</h1>
        </div>
      </section>

      {/* CARDS SECTION */}
     <section className="pvc-cards-section">

  <h2 className="pvc-heading">Airport Advertising Services</h2>

  <div className="pvc-cards">
    {cards1.map((item, index) => (
      <div className="pvc-card" key={index}>
        <img src={item.img} alt={item.title} />
        <h3>{item.title}</h3>
        <h4>{item.subtitle}</h4>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>

</section>

      {/* IMAGE + TEXT SECTION */}
      <section className="pvc-about">
       
        <div className="about-img">
          <img src="/ar7.webp" alt="cinema" />
        </div>

        <div className="about-text">
          <h2>Advertise at the Gateway of Cities</h2>
          <p>
           Airports are high-traffic hubs filled with decision-makers, professionals
           , and international travelers. Airport advertising provides premium 
           visibility and credibility to your brand.
          </p>
          <p>
            From digital billboards to static displays, your brand can make a
             strong impression where it matters most.
          </p>

          <button>Start Your Campaign</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pvc-features">

  <h2 className="features-heading">Why Choose Airport Advertising?</h2>

  {features1.map((item, index) => (
    <div className="feature-card" key={index}>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  ))}

</section>

    </div>
  );
};

export default Airport;