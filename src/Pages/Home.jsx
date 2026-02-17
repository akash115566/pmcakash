import React, { useState, useEffect,useRef } from "react";
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



const images3 = [
  "/hos1.webp",
  "/hos2.webp",
  "/hos3.webp",
  "/hos4.webp",
  "/hos5.webp",
];



const images4 = [
  "/he1.webp",
  "/he2.webp",
  "/he3.webp",
  "/he4.webp",
  "/he5.webp",
  "/he6.webp",
  "/he7.webp",
  "/he8.webp",
  "/he9.webp",
  "/he10.webp",
];



const images5 = [
  "/hn1.webp",
  "/hn2.webp",
  "/hn3.webp",
  "/hn4.webp",
  "/hn5.webp",
  "/hn6.webp",
  "/hn7.webp",
  "/hn8.webp",
];




const images6 = [
  "/hnn1.webp",
  "/hnn2.webp",
  "/hnn3.webp",
  // "/hnn4.webp",
  "/hnn5.webp",
  "/hnn6.webp",
  "/hnn7.webp",
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
  const interval1 = setInterval(() => {
    setCurrentSecond((prev) => (prev + 1) % secondImages.length);
  }, 3000); // auto-slide
  return () => clearInterval(interval1);
}, []);





  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
    {
      image: "/ho1.webp",
      title: "Pooja Movie Creations at Anupamaa",
      shortText: "A memorable meetup of Pooja Movie Cre...",
      fullText:
        "A memorable meetup of Pooja Movie Creations at the popular TV show Anupamaa. Our collaboration highlighted strong brand visibility and impactful advertising reach across national audiences."
    },
    {
      image: "/ho2.webp",
      title: "Pooja Movie Creations at CID",
      shortText: "Exclusive brand collaboration with TV stars...",
      fullText:
        "Exclusive brand collaboration with leading TV stars ensuring mass audience engagement and nationwide recognition for premium brand campaigns."
    },
    {
      image: "/ho3.webp",
      title: "Pooja Movie Creations on Crorepati Stage",
      shortText: "High visibility advertising during prime time...",
      fullText:
        "High visibility advertising during prime time delivering unmatched audience impressions and strong ROI for brands across India."
    },
    {
      image: "/ho4.webp",
      title: "Pooja Movie Creations at Bigg Boss",
      shortText: "Strategic event branding and promotions...",
      fullText:
        "Strategic event branding and promotions creating powerful brand awareness and consistent audience connection."
    }
  ];

  const toggleText = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };




  
 const cards2 = [
  {
    image: "/hoa1.webp",
    title: "Year: 2019"
  },
  {
    image: "/hoa2.webp",
    title: "Year: 2018"
  },
  {
    image: "/hoa3.webp",
    title: "Year: 2017"
  },
  {
    image: "/hoa4.webp",
    title: "Year: 2016"
  }
];


 const cards3 = [
  {
    image: "/hc1.webp",
    
  },
  {
    image: "/hc2.webp",
   
  },
  {
    image: "/hc3.webp",
    
  },
  {
    image: "/hc4.webp",
   
  }
];

const cards4 = [
  {
    image: "/hg1.webp",
    
  },
  {
    image: "/hg2.webp",
   
  },
  {
    image: "/hg3.webp",
    
  },
  {
    image: "/hg5.webp",
   
  }
];



const sliderRef2 = useRef(null);

useEffect(() => {
  const slider = sliderRef2.current;
  let animationFrame;
  let scrollSpeed = 1;

  const slide2 = () => {
    if (!slider) return;

    slider.scrollLeft += scrollSpeed;

    // Infinite loop smooth reset
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }

    animationFrame = requestAnimationFrame(slide2);
  };

  slide2();

  return () => cancelAnimationFrame(animationFrame);
}, []);






  return (

     <>
    {/* <section className="slider">
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
    </section> */}


    <section className="about-section">

      <h2 className="section-title">About & Services</h2>

      <div className="about-container">

   
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

       
        <div className="about-right">
  <div className="services-grid" >
    {services.map((service, index) => (
      <div className="service-card" key={index} style={{background:"#111"}}>
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

    <div className="slider-wrapper4">
       <h2 className="slider-headin4" style={{textAlign:"center",fontSize:"3rem",color:"#f4b400"}}>Exclusive Advertising</h2>
      <div className="slider4">
        <div className="slide-track4">
          {images4.concat(images4).map((img, index) => (
            <div className="slide4" key={index}>
              <img src={img} alt="slider" />
            </div>
          ))}
        </div>
      </div>
    </div>



    
 <div className="slider-wrapper5" style={{background:"#111"}}>
       <h2 className="slider-headin5" style={{textAlign:"center",fontSize:"3rem",color:"#f4b400"}}>Premium Channels</h2>
       <p style={{textAlign:"center", color:"#fff"}}>Apne brand ko top TV & OTT channels par showcase karein. Smooth slider me premium partner channels dekhein.</p>
      <div className="slider5">
        <div className="slide-track5">
          {images5.concat(images5).map((img, index) => (
            <div className="slide5" key={index}>
              <img src={img} alt="slider" />
            </div>
          ))}
        </div>
      </div>
    </div> 




     
    <div className="slider-wrapper6">
       <h2 className="slider-heading6" style={{textAlign:"center"}}>News Channels</h2>
       <p style={{textAlign:"center",color:"#fff"}}>Bharat ke top news channels par apna brand showcase karein.</p>
      <div className="slider6">
        <div className="slide-track6">
          {images6.concat(images6).map((img, index) => (
            <div className="slide6" key={index}>
              <img src={img} alt="slider" />
            </div>
          ))}
        </div>
      </div>
    </div> 


 {/* <section className="exclusive-section1">
  <h2 className="exclusive-heading1">Exclusive Advertising</h2>

  <div className="slider1">
    <div
      className="slide-track1"
  style={{ transform: `translateX(-${currentSecond * 100}%)` }}


    >
      {secondImages.map((img, index1) => (
        <div className="slide1" key={index1}>
          <img src={img} alt={`Ad ${index1 + 1}`} />
        </div>
      ))}
    </div>
  </div>
</section>  */}


 <section className="exclusive-media-section">
      <h2 className="exclusive-heading">
        OUR EXCLUSIVE ADVERTISING MEDIA
      </h2>

      <div className="exclusive-container">
        {cards.map((card, index) => (
          <div className="exclusive-card" key={index}>
            <img src={card.image} alt={card.title} />

            <h3>{card.title}</h3>

            <p>
              {activeIndex === index ? card.fullText : card.shortText}
            </p>

            <button
              className="read-more-btn"
              onClick={() => toggleText(index)}
            >
              {activeIndex === index ? "Show Less" : "Read More →"}
            </button>
          </div>
        ))}
      </div>

        <div className="services-button1">
    <Link to="/services" className="main-link1">
     View More →
    </Link>
  </div>
    </section>



<section className="exclusive-media-section2">
  <div className="exclusive-container2">
    {cards2.map((card, index) => (
      <div className="exclusive-card2" key={index}>
        <img src={card.image} alt={card.title} />
        <p>{card.title}</p>
      </div>
    ))}
  </div>

  <div className="services-button2">
    <Link to="/services" className="main-link2">
     View More →
    </Link>
  </div>
</section>

<section className="exclusive-media-section3">
  <h2 className="exclusive-heading3">
   Celebrities
  </h2>
  <div className="exclusive-container3">
    {cards3.map((card, index) => (
      <div className="exclusive-card3" key={index}>
        <img src={card.image} alt={card.title} />
        <p>{card.title}</p>
      </div>
    ))}
  </div>

 
</section>



<section className="exclusive-media-section4">
  <h2 className="exclusive-heading4">
  Gallery
  </h2>
  <div className="exclusive-container4">
    {cards4.map((card, index) => (
      <div className="exclusive-card4" key={index}>
        <img src={card.image} alt={card.title} />
        <p>{card.title}</p>
      </div>
    ))}
  </div>

  <div className="services-button4">
    <Link to="/services" className="main-link2">
     View More
    </Link>
  </div>
</section>



{/* <section className="clients-section-main">
  <h2 className="clients-heading-title">Our Clients</h2>

  <div className="clients-slider-wrapper">
    <div className="clients-slider-track" ref={sliderRef2}>
      <img src="/hos1.webp" alt="Client" />
      <img src="/hos2.webp" alt="Client" />
      <img src="/hos3.webp" alt="Client" />
      <img src="/hos4.webp" alt="Client" />
      <img src="/hos5.webp" alt="Client" />

     <img src="/hos1.webp" alt="Client" />
      <img src="/hos2.webp" alt="Client" />
      <img src="/hos3.webp" alt="Client" />
      <img src="/hos4.webp" alt="Client" />
      <img src="/hos5.webp" alt="Client" />
    </div>
  </div>
</section> */}


    {/* <div className="slider-wrapper3">
       <h2 className="slider-heading">Our Clients</h2>
      <div className="slider3">
        <div className="slide-track3">
          {images3.concat(images3).map((img, index) => (
            <div className="slide3" key={index}>
              <img src={img} alt="slider" />
            </div>
          ))}
        </div>
      </div>
    </div> */}

 
<section className="hotdeal-section">
  <div className="hotdeal-container">

    <h2 className="hotdeal-heading">🔥 Hot Deal Packages</h2>

    <p className="hotdeal-subtext">
      Choose the best package for your production needs
    </p>

    <div className="hotdeal-cards">

    
      <div className="hotdeal-card">
        <h3 className="package-title">🎬 Basic Package</h3>
        <h2 className="package-price">₹9,999</h2>

        <ul className="package-features">
          <li>✔ 2 Days Shooting</li>
          <li>✔ Basic Editing</li>
          <li>✔ HD Quality</li>
          <li>✔ 3 Revisions</li>
        </ul>

        <a href="#" className="package-btn">Book Now</a>
      </div>


      <div className="hotdeal-card">
        <h3 className="package-title">🌟 Premium Package</h3>
        <h2 className="package-price">₹24,999</h2>

        <ul className="package-features">
          <li>✔ 2 Days Shooting</li>
          <li>✔ 4K Editing</li>
          <li>✔ Drone Shots</li>
          <li>✔ Unlimited Revisions</li>
        </ul>

        <a href="#" className="package-btn">Book Now</a>
      </div>

    
      <div className="hotdeal-card">
        <h3 className="package-title">🚀 Pro Package</h3>
        <h2 className="package-price">₹49,999</h2>

        <ul className="package-features">
          <li>✔ 10 Days Shooting</li>
          <li>✔ 4K Cinematic Editing</li>
          <li>✔ Drone + Gimbal Shots</li>
          <li>✔ Unlimited Revisions + Priority Support</li>
        </ul>

        <a href="#" className="package-btn">Book Now</a>
      </div>

    </div>
  </div>
</section> 










 </>

  );
};

export default Home;
