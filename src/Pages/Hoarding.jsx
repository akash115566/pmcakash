import React from 'react'
import "../Style/hoarding.css"




const cards2 = [
  {
    img: "/ar1.webp",
    title: "Strategic Locations",
    // subtitle: "Big Screen Ads",
    desc: "High-traffic placement ensures maximum visibility for your brand."
  },
  {
    img: "/ar2.avif",
    title: "Creative Designs",
    // subtitle: "Small Screen Ads",
    desc: "Catchy hoarding designs that instantly attract public attention"
  },
  {
    img: "/ar3.webp",
    title: "Brand Awareness",
    // subtitle: "Standee Ads",
    desc: "Boost recognition with powerful outdoor advertising strategies."
  },
  {
    img: "/ar4.webp",
    title: "Event Promotionst",
    // subtitle: "Popcorn Bucket Ads",
    desc: "Drive audience engagement by promoting events on big hoardings."
  },
  {
    img: "/ar5.webp",
    title: "Targeted Audience",
    // subtitle: "Lobby & Restroom Ads",
    desc: "Reach the right audience with location-specific hoarding campaigns."
  },
  {
    img: "/ar6.webp",
    title: "End-to-End Execution",
    // subtitle: "Seat Back Ads",
    desc: "From design to installation, we handle the entire process smoothly."
  }
];


const Hoarding = () => {
  return (
  <>
     {/* HERO SECTION */}
      <section className="pvc-hero2">
        <div className="overlay2">
          <h1>About Hoardings Advertising</h1>
        </div>
      </section>

      {/* CARDS SECTION */}
     <section className="pvc-cards-section2">

  <h2 className="pvc-heading2">About Hoardings Advertising</h2>

  <div className="pvc-cards2">
    {cards2.map((item, index) => (
      <div className="pvc-card2" key={index}>
        <img src={item.img} alt={item.title} />
        <h3>{item.title}</h3>
        <h4>{item.subtitle}</h4>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>

</section>
  
  </>
  )
}

export default Hoarding
