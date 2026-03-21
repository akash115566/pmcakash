import React from 'react'
import { Link } from 'react-router-dom';
import "../Style/metro.css"





const cards3 = [
  {
    img: "/m1.webp",
    title: "Full Train Wraps",
    // subtitle: "Big Screen Ads",
    desc: "Cover entire metro trains with your brand for unmatched visibility."
  },
  {
    img: "/m2.webp",
    title: "Station Billboards",
    // subtitle: "Small Screen Ads",
    desc: "Large format displays at busy metro stations to grab instant attention."
  },
  {
    img: "/m3.webp",
    title: "Inside Train Ads",
    // subtitle: "Standee Ads",
    desc: "Posters, digital screens and branding inside metro coaches."
  },
  {
    img: "/m4.webp",
    title: "Digital Screens",
    // subtitle: "Popcorn Bucket Ads",
    desc: "High-definition digital displays for dynamic and engaging ads.."
  },
  {
    img: "/m5.webp",
    title: "Turnstile Branding",
    // subtitle: "Lobby & Restroom Ads",
    desc: "Ads on entry gates to ensure maximum recall during daily commute."
  },
  {
    img: "/m6.webp",
    title: "Platform Panels",
    // subtitle: "Seat Back Ads",
    desc: "Eye-catching panels and posters placed across metro platforms."
  }
];

const features3 = [
  {
    title: "Massive Reach",
    desc: "Reach millions of metro passengers daily across prime urban locations."
  },
  {
    title: "High Frequency",
    desc: "Repeated exposure ensures your brand stays top of mind with commuters."
  },
  {
    title: "Targeted Campaigns",
    desc: "Customize ads for specific metro lines, stations, or demographics."
  },
  {
    title: "Cost Effective",
    desc: "Compared to traditional outdoor advertising, metro ads give higher ROI."
  }
];

const Metro = () => {
  return (
   <>
      {/* HERO SECTION */}
      <section className="pvc-hero3">
        <div className="overlay3">
          <h1>Metro Advertising</h1>
          <p>Reach millions of daily commuters through eye-catching metro advertising campaigns.</p>
        </div>
      </section>

      {/* CARDS SECTION */}
     <section className="pvc-cards-section3">

  <h2 className="pvc-heading3">Metro Advertising Solutions</h2>

  <div className="pvc-cards3">
    {cards3.map((item, index) => (
      <div className="pvc-card3" key={index}>
        <img src={item.img} alt={item.title} />
        <h3>{item.title}</h3>
        <h4>{item.subtitle}</h4>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>

</section>

      {/* IMAGE + TEXT SECTION */}
      <section className="pvc-about3">
       
        <div className="about-img3">
          <img src="/m7.webp" alt="cinema" />
        </div>

        <div className="about-text3">
          <h2>Advertise Where People Travel</h2>
          <p>
           Metro advertising is one of the fastest growing platforms to capture
            attention of urban audiences. From inside train branding to station
             billboards, your message travels with millions every day.
          </p>
          <p>
           Leverage this high-frequency, high-visibility medium to make your brand 
           a part of commuters' daily journey.
          </p>

          <Link to="/contact"  className='button'>Start Your Campaign</Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pvc-features3">
        {features3.map((item, index) => (
          <div className="feature-card3" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
   
   </>
  )
}

export default Metro
