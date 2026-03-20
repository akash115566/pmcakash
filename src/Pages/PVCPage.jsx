import React from "react";
import "../Style/pvc.css";

const cards = [
  {
    img: "/p2.webp",
    title: "Big Screen Advertising",
    subtitle: "Big Screen Ads",
    desc: "High-impact ads before and during movie intervals, showcased on the large cinema screen with surround sound."
  },
  {
    img: "/p3.webp",
    title: "Small Screen Advertising",
    subtitle: "Small Screen Ads",
    desc: "Advertisements on lobby screens, ticket counters, and waiting areas that attract audience attention."
  },
  {
    img: "/p4.webp",
    title: "Standee Advertising",
    subtitle: "Standee Ads",
    desc: "Eye-catching standees in cinema lobbies, corridors, and entrances that create strong brand presence."
  },
  {
    img: "/p5.webp",
    title: "Popcorn Bucket Advertising",
    subtitle: "Popcorn Bucket Ads",
    desc: "Advertising on popcorn tubs and beverage cups that travel with the audience throughout the movie."
  },
  {
    img: "/p6.webp",
    title: "Lobby Ads",
    subtitle: "Lobby & Restroom Ads",
    desc: "Posters, digital screens, and branding opportunities across cinema lobby and restrooms for continuous visibility."
  },
  {
    img: "/p7.webp",
    title: "Seat Back Advertising",
    subtitle: "Seat Back Ads",
    desc: "Branding on the back of cinema seats ensures constant exposure to audiences throughout the movie."
  }
];

const features = [
  {
    title: "Premium Audience",
    desc: "Reach a high-income audience who are attentive and engaged during movies."
  },
  {
    title: "High Impact",
    desc: "Big screen visuals and sound ensure your brand gets maximum recall value."
  },
  {
    title: "Brand Association",
    desc: "Associate your brand with entertainment and luxury experiences."
  },
  {
    title: "Nationwide Reach",
    desc: "Leverage PVR’s presence across India to run campaigns in multiple cities."
  }
];

const PVCPage = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="pvc-hero">
        <div className="overlay">
          <h1>PVR Cinema Advertising</h1>
        </div>
      </section>

      {/* CARDS SECTION */}
     <section className="pvc-cards-section">

  <h2 className="pvc-heading">Cinema Advertising Solutions</h2>

  <div className="pvc-cards">
    {cards.map((item, index) => (
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
          <img src="/p8.webp" alt="cinema" />
        </div>

        <div className="about-text">
          <h2>Engage Audiences on the Big Screen</h2>
          <p>
            Cinema advertising is one of the most impactful ways to capture
            undivided attention. With PVR Cinemas, your brand message is showcased
            to a premium and focused audience, creating a lasting impression.
          </p>
          <p>
            From brand commercials before movies to standees and lobby displays,
            we ensure your campaign gets maximum visibility.
          </p>

          <button>Start Your Campaign</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pvc-features">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

    </div>
  );
};

export default PVCPage;