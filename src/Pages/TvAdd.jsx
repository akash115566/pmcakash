import React, { useEffect, useState } from "react";
import "../Style/tvadd.css";

const TvAdd = () => {

  /* ---------- Premium Channels ---------- */

  const channels = [
    { id: 1, img: "/ad1.webp", name: "Star Plus", desc: "India's leading entertainment channel" },
    { id: 2, img: "/ad2.webp", name: "Colors TV", desc: "Premium entertainment content" },
    { id: 3, img: "/ad3.webp", name: "Sony Entertainment", desc: "Quality entertainment" },
    { id: 4, img: "/ad4.webp", name: "Zee TV", desc: "Top Hindi entertainment" },
    { id: 5, img: "/ad5.webp", name: "Colors TV", desc: "India's leading entertainment channel" },
    { id: 6, img: "/ad6.webp", name: "Sony Entertainment", desc: "India's leading entertainment channel" }
  ];


  /* ---------- Serial Channels ---------- */

  const channels1 = [
    { id: 1, img: "/ad11.webp", name: "Zee TV", desc: "Popular drama serials" },
    { id: 2, img: "/ad12.webp", name: "Star Bharat", desc: "Hindi entertainment" },
    { id: 3, img: "/ad13.webp", name: "Sony SAB", desc: "Comedy & family shows" },
    { id: 4, img: "/ad14.webp", name: "Zee TV", desc: "Popular drama serials" },
    { id: 5, img: "/ad15.webp", name: "Star Bharat", desc: "Hindi entertainment" },
    { id: 6, img: "/ad16.webp", name: "Sony SAB", desc: "Comedy & family shows" }
  ];


  /* ---------- News Channels ---------- */

  const channels2 = [
    { id: 1, img: "/ad17.webp", name: "Aaj Tak", desc: "India's #1 news channel" },
    { id: 2, img: "/ad18.webp", name: "Zee News", desc: "Breaking news & analysis" },
    { id: 3, img: "/ad19.webp", name: "NDTV India", desc: "Trusted news source" },
    { id: 4, img: "/ad20.webp", name: "Aaj Tak", desc: "India's #1 news channel" },
    { id: 5, img: "/ad21.webp", name: "Zee News", desc: "Breaking news & analysis" },
    { id: 6, img: "/ad22.webp", name: "NDTV India", desc: "Trusted news source" }
  ];


  /* ---------- Regional Channels ---------- */

  const channels3 = [
    { id: 1, img: "/ad31.webp", name: "ETV Telugu", desc: "Top Telugu channel" },
    { id: 2, img: "/ad32.webp", name: "Sun TV", desc: "Popular Tamil entertainment" },
    { id: 3, img: "/ad33.webp", name: "Asianet", desc: "Leading Malayalam channel" },
    { id: 4, img: "/ad34.webp", name: "Zee Marathi", desc: "Top Marathi entertainment" },
    { id: 5, img: "/ad35.webp", name: "ETV Telugu", desc: "Top Telugu channel" },
    { id: 6, img: "/ad36.webp", name: "Sun TV", desc: "Popular Tamil entertainment" }
  ];

  const loopChannels = [...channels3, ...channels3];



  /* ---------- Slider State ---------- */

  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {

    if (hover) return;

    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);

  }, [hover]);



  return (
    <>

      <div className="tvadd-page">

        {/* Banner */}
        <section className="tv-banner">

          <div className="tv-banner-content">

            <h1>TV & Ad Advertising</h1>

            <p>
              Boost your brand visibility with targeted TV campaigns designed.
            </p>

            <a href="#" className="tv-btn">
              Start Your Campaign
            </a>

          </div>

        </section>


        {/* Channel Partners */}

        <section className="channel-section">

          <h2>Our Channel Partners</h2>

          <p>
            Pooja Movie Creations collaborates with India's leading TV channels
            to deliver maximum reach and impact for your brand.
          </p>

        </section>

      </div>


      {/* ---------- Premium Channels ---------- */}

      <section className="channels-section">

        <div className="channels-header">
          <h2>👑 Premium National Channels</h2>
          <div className="line"></div>
        </div>

     <div className="channels-wrapper">

    <div className="channels-slider">

      {loopChannels.map((item, index) => (
        <div className="channel-card" key={index}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
        </div>
      ))}

    </div>

  </div>

      </section>



      {/* ---------- Serial Channels ---------- */}

      <section className="channels-section1">

        <div className="channels-header1">
          <h2>📺 Entertainment Serial Channels</h2>
          <div className="line1"></div>
        </div>

     <div className="channels-wrapper1">

    <div className="channels-slider1">

      {loopChannels.map((item, index) => (
        <div className="channel-card1" key={index}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
        </div>
      ))}

    </div>

  </div>

       

      </section>



      {/* ---------- News Channels ---------- */}

      <section className="channels-section2">

        <div className="channels-header2">
          <h2>📰 National News Channels</h2>
          <div className="line2"></div>
        </div>

       <div className="channels-wrapper2">

    <div className="channels-slider2">

      {loopChannels.map((item, index) => (
        <div className="channel-card2" key={index}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
        </div>
      ))}

    </div>

  </div>

      </section>



      {/* ---------- Regional Channels ---------- */}

      <section className="channels-section3">

        <div className="channels-header3">
          <h2>🌐 Regional Channels</h2>
          <div className="line3"></div>
        </div>

        <div className="channels-wrapper3">

    <div className="channels-slider3">

      {loopChannels.map((item, index) => (
        <div className="channel-card3" key={index}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
        </div>
      ))}

    </div>

  </div>

      </section>



          <section className="why-section">

      {/* Section 1 */}
      <div className="why-container">

        <div className="why-img">
          <img src="/ad39.webp" alt="tv ads" />
        </div>

        <div className="why-text">
          <h2>Why Choose TV Ads?</h2>

          <p>
            Television advertising remains one of the most effective ways to
            reach millions of viewers across demographics. With the right
            strategy, your brand can connect with audiences in an engaging
            and memorable way.
          </p>

          <p>
            We provide end-to-end campaign management — from concept creation,
            slot booking, production, to delivery.
          </p>
        </div>

      </div>


      {/* Section 2 */}
      <div className="why-container reverse">

       

        <div className="why-text">
          <h2>Maximize Your Reach</h2>

          <p>
            Our partnerships with top channels and networks ensure you get
            the best airtime and maximum exposure. Whether it's prime-time
            ads or regional slots, we help your message land with impact.
          </p>

          <p>
            Custom packages are available to suit every budget and campaign size.
          </p>
        </div>

         <div className="why-img">
          <img src="/ad40.webp" alt="reach" />
        </div>

      </div>

    </section>


       <section className="campaign-section">

      <div className="campaign-container">

        <h2>Ready to Take Your Brand to Millions?</h2>

        <p>
          Let's build a high-impact TV campaign that grows your business.
        </p>

        <a href="/contact" className="campaign-btn">
          Start Your Campaign
        </a>

      </div>

    </section>

    </>
  );
};

export default TvAdd;