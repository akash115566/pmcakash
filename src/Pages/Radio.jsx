import React, { useEffect, useRef } from "react";
import "../Style/radio.css";

const radios = [
  {
    img: "/r1.webp",
    name: "Radio Mirchi",
    freq: "98.3 FM",
    text: "Bollywood hits and popular entertainment content for youth"
  },
  {
    img:"/r2.webp",
    name: "Red FM",
    freq: "93.5 FM",
    text: "Bajate Raho! - Music, comedy and entertainment"
  },
  {
    img: "/r3.webp",
    name: "FM Gold",
    freq: "106.4 FM",
    text: "Classic hits and golden oldies for mature audience"
  },
  {
    img: "/r4.webp",
    name: "Radio City",
    freq: "91.1 FM",
    text: "Rag Rag Mein Daude City - Local content and music"
  },
  {
    img: "/r5.webp",
    name: "Big FM",
    freq: "92.7 FM",
    text: "Dhun Badal Ke Toh Dekho - Retro & modern mix"
  },
  {
    img:"/r6.webp",
    name: "Fever FM",
    freq: "104 FM",
    text: "Bollywood & celebrity-driven entertainment"
  }
];

function Radio() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slide = () => {
      if (slider) {
        scrollAmount += 1;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
        slider.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(slide, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* Banner */}
      <section className="radio-banner">
        <div className="overlay">
          <h1>Radio Ad Agency</h1>
          <p>
            Amplify your brand’s voice with strategic radio advertising campaigns that connect with millions every day.
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="radio-slider-section">
        <h2>Popular Radio Stations & Frequencies</h2>
        <p>Choose Your Favorite Radio and Get the Best Deal</p>

        <div className="slider" ref={sliderRef}>
          {[...radios, ...radios].map((item, index) => (
            <div className="radio-card" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <h4>{item.freq}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="radio-about">
        <div className="radio-about-container">
          <div className="left">
            <img src="/r8.webp" alt="radio" />
          </div>

          <div className="right">
            <h2>Reach Millions Through Radio</h2>
            <p>
              Radio remains one of the most trusted and wide-reaching platforms in India. With our tailored radio campaigns, we ensure your brand gets the attention it deserves across top FM channels and regional stations.
            </p>
            <p>
              Our expert team crafts engaging jingles, ads, and sponsorships to maximize your ROI.
            </p>
            <button>Start Your Campaign</button>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="why-radio">
        <h2>Why Choose Our Radio Advertising?</h2>

        <div className="why-container">
          <div className="why-card">
            <h3>Wide Reach</h3>
            <p>Connect with millions of daily listeners across national and regional radio stations.</p>
          </div>

          <div className="why-card">
            <h3>Creative Ads</h3>
            <p>Engaging jingles and audio storytelling crafted by industry professionals.</p>
          </div>

          <div className="why-card">
            <h3>Cost-Effective</h3>
            <p>Radio ads provide maximum impact with a cost-effective approach for all businesses.</p>
          </div>

          <div className="why-card">
            <h3>Targeted Audience</h3>
            <p>Run campaigns that focus on specific regions, age groups, or listener demographics.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Radio;