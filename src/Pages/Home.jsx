import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBriefcase, FaBox, FaAward, FaStar, FaHandshake, FaVideo , FaBullseye,  FaUsers, FaGlobe, FaChartLine} from "react-icons/fa";
import {
  FaTv,
  FaFilm,

  FaBuilding,
  FaPlane,
  FaSubway,
  FaPrint,
  FaBullhorn,
  FaAd
} from "react-icons/fa";


import "../Style/home.css";


 
const data = [
  {
    title: "Tv Advt Agency",
    text: "We are a leading TV Advertising Agency helping brands reach millions of viewers across India through powerful television campaigns and creative marketing strategies.",
    img: "/ht1.jfif"
  },
  {
    title: "Best Production House",
    text: "Our production house creates high quality TV commercials, corporate films and brand videos using modern technology and creative storytelling.",
    img: "/ht2.jfif"
  },
  {
    title: "Best Media House",
    text: "We provide complete media solutions including advertising planning, broadcasting and brand promotions to help businesses grow faster.",
    img: "/ht3.jfif"
  }
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
  { img: "/hn1.webp", title: "Zee TV" },
  { img: "/hn2.webp", title: "Sony TV" },
  { img: "/hn3.webp", title: "Star Gold" },
  { img: "/hn4.webp", title: "Colors HD" },
  { img: "/hn5.webp", title: "&TV" },
  { img: "/hn7.webp", title: "Zee Tv" },
  { img: "/hn8.webp", title: "Sony Sab" },
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

    const navigate = useNavigate();
const services = [
  { icon: <FaTv />, title: "TV Advertising", link: "/tvadd" },
  { icon: <FaFilm />, title: "TVC Making", link: "/tvc" },
  { icon: <FaVideo />, title: "TV Ad Film Production", link: "/tvadfilm" },
  { icon: <FaVideo />, title: "Web Series Production", link: "/web" },
  { icon: <FaBuilding />, title: "Corporate Film Production", link: "/corporate-film" },
  { icon: <FaBullhorn />, title: "Radio FM Advertising", link: "/radio-fm" },
  { icon: <FaFilm />, title: "PVR Cinemas Advertising", link: "/pvr-advertising" },
  { icon: <FaPlane />, title: "Airport Advertising", link: "/airport-advertising" },
  { icon: <FaBullhorn />, title: "Hoarding", link: "/hoarding" },
  { icon: <FaSubway />, title: "Metro Advertising", link: "/metro" },
  { icon: <FaPrint />, title: "Print Advertising", link: "/print" },
  { icon: <FaAd />, title: "Digital Live Screen Advertising", link: "/digital-screen" }
];
  // const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % images.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

 const data2 = [
    {
      icon: <FaBriefcase />,
      title: "18+ Years Experience",
      text: "Proven expertise in film production.",
    },
    {
      icon: <FaBox />,
      title: "Custom Promotion Packages",
      text: "Tailored branding strategies.",
    },
    {
      icon: <FaAward />,
      title: "National Awards",
      text: "Recognized for excellence.",
    },
    {
      icon: <FaStar />,
      title: "900+ Celebrity Endorsements",
      text: "Trusted by leading celebrities.",
    },
    {
      icon: <FaHandshake />,
      title: "5000+ Client Brands",
      text: "Strong client partnerships.",
    },
    {
      icon: <FaVideo />,
      title: "5000+ Video Projects",
      text: "Vast experience across industries.",
    },
  ];


  

const slides1 = [
  { img: "/hsl1.webp", heading: "POOJA MOVIE  CREATIONS ",desc: "BEST PRODUCTION COMPANY CELEBRATING 17 YEARS OF EXCELLENCE" , 
    // extra: "We don’t just promote, we help scale your brand effectively.",
    // points: [
    //   "Brand positioning",
    //   "Trust building planning",
    //   "Lead generation strategy", "Domestic market reach",
    //   "Product promotion",
    //   "Customer targeting"
    // ]
  },
  { img: "/hsl2.webp", heading: "POOJA MOVIE  CREATIONS",desc: "BEST TELESSHOPPING MAKERS CELEBRATING 17BYEARS OF EXCELLENCE"  , 
    // extra: "We don’t just promote, we help scale your brand effectively.",
    // points: [
    //   "Brand positioning",
    //   "Trust building planning",
    //   "Lead generation strategy", "Domestic market reach",
    //   "Product promotion",
    //   "Customer targeting"
    // ]
  },
  { img: "/hsl3.webp", heading: "Elevate Your Brand Visually",desc: "India's leading ad film makers and brand promotion agency" ,
    //  extra: "We don’t just promote, we help scale your brand effectively.",
    // points: [
    //   "Brand positioning",
    //   "Trust building planning",
    //   "Lead generation strategy", "Domestic market reach",
    //   "Product promotion",
    //   "Customer targeting"
    // ]
  },
  { img: "/hsl4.webp", heading: "Your Vision, Our Cinematic Excellence",desc: "Highlights collaboration and quality" ,
    //  extra: "We don’t just promote, we help scale your brand effectively.",
    // points: [
    //   "Brand positioning",
    //   "Trust building planning",
    //   "Lead generation strategy", "Domestic market reach",
    //   "Product promotion",
    //   "Customer targeting"
    // ]
  },
  { img: "/hsl5.webp", heading: "Professional Product Shoot Services" ,desc: "Clear message that Pooja Movie Creations provides professional product shoot services" , 
    // extra: "We don’t just promote, we help scale your brand effectively.",
    // points: [
    //   "Brand positioning",
    //   "Trust building planning",
    //   "Lead generation strategy", "Domestic market reach",
    //   "Product promotion",
    //   "Customer targeting"
    // ]
  },
  { img: "/hsl6.webp", heading: "TV Advertising Just ₹99,000 for 30 Days!",desc: "Boost your brand with our premium TV ads! Reach millions for just ₹99,000/month. Don’t miss out!"  ,
    //  extra: "We don’t just promote, we help scale your brand effectively.",
    // points: [
    //   "Brand positioning",
    //   "Trust building planning",
    //   "Lead generation strategy", "Domestic market reach",
    //   "Product promotion",
    //   "Customer targeting"
    // ]
  },
  { img: "/hsl7.webp", heading: "Top TV Advertising Media House",desc: "India's leading ad film makers and brand promotion agency", 
    // extra: "We don’t just promote, we help scale your brand effectively.",
    // points: [
    //   "Brand positioning",
    //   "Trust building planning",
    //   "Lead generation strategy", "Domestic market reach",
    //   "Product promotion",
    //   "Customer targeting"
    // ] 
  },
  { img: "/hsl8.webp", heading: "POOJA MOVIE CREATONS",desc: "INDIA’S NO 1 BRAND BUILDING COMPANY CELEBRATE 17 YEARS OF EXCELLENCE", 
    // extra: "We don’t just promote, we help scale your brand effectively.",
    // points: [
    //   "Brand positioning",
    //   "Trust building planning",
    //   "Lead generation strategy", "Domestic market reach",
    //   "Product promotion",
    //   "Customer targeting"
    // ]
   },
    { img: "/ht4.webp", heading: "TV ADVT AGENCY",desc: "We are a leading TV Advertising Agency helping brands and creative marketing strategies.", 
    //   extra: "We don’t just promote, we help scale your brand effectively.",
    // points: [
    //   "Brand positioning",
    //   "Trust building planning",
    //   "Lead generation strategy", "Domestic market reach",
    //   "Product promotion",
    //   "Customer targeting"
    // ] 
  },
      { img: "/ht6.jfif", heading: " BEST PRODUCTION HOUSE",desc: "Our production house creates high quality TV  and creative storytelling." , 
    //     extra: "We don’t just promote, we help scale your brand effectively.",
    // points: [
    //   "Brand positioning",
    //   "Trust building planning",
    //   "Lead generation strategy", "Domestic market reach",
    //   "Product promotion",
    //   "Customer targeting"
    // ]
  },
        { img: "/ht3.jfif", heading: "BEST MEDIA HOUSE",desc: "We provide complete media and planning, broadcasting and to help businesses grow faster.",
   
  },
     { img: "/hsl11.jpeg", 
   
  },
     { img: "/hsl12.jpeg",
   
  },
     { img: "/hsl13.jpeg", 
   
  }

];




const scaleData = [
  { icon: <FaBullseye />, title: "Brand Positioning" },
  { icon: <FaHandshake />, title: "Trust Building Planning" },
  { icon: <FaUsers />, title: "Lead Generation Planning" },
  { icon: <FaGlobe />, title: "Domestic & International Market" },
  { icon: <FaBuilding />, title: "Brand Building" },
  { icon: <FaChartLine />, title: "Long Term Growth Strategy" }
];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
     setCurrent((prev) => (prev + 1) % slides1.length);
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
      title: "Do Branding & Advertising in Anupama Serial",
      shortText: "A memorable meetup of Pooja Movie Cre...",
      fullText:
        "A memorable meetup of Pooja Movie Creations at the popular TV show Anupamaa. Our collaboration highlighted strong brand visibility and impactful advertising reach across national audiences."
    },
    {
      image: "/ho2.webp",
      title: "Do Branding & Advertising in  CID",
      shortText: "Exclusive brand collaboration with TV stars...",
      fullText:
        "Exclusive brand collaboration with leading TV stars ensuring mass audience engagement and nationwide recognition for premium brand campaigns."
    },
    {
      image: "/ho3.webp",
      title: "Do Branding & Advertising in  Crorepati Stage",
      shortText: "High visibility advertising during prime time...",
      fullText:
        "High visibility advertising during prime time delivering unmatched audience impressions and strong ROI for brands across India."
    },
    {
      image: "/ho4.webp",
      title: "Do Branding & Advertising in  Bigg Boss",
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


  const images9 = [
  "/hs21.webp",
  "/hs22.webp",
  "/hs23.webp",
  "/hs24.webp",
  "/hs25.webp",
  "/hs26.webp",
  "/hs27.webp",
  "/hs28.webp",
  "/hs29.webp",
  "/hs30.webp",
   "/hs31.webp",
  "/hs32.webp",
  "/hs33.webp",
  "/hs34.webp",
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
    <section className="slider0" >
  <div
    className="slider-track0"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {slides1.map((slide, index) => (
      <div className="slide0" key={index}>
        
        <img src={slide.img} alt="slide" />

        <div className="slide-content0">
          <h2>{slide.heading}</h2>
           <h3>{slide.desc}</h3>
           {/* <h3>{slide.extra}</h3>
          <h3>
  {slide.points.map((point, index) => (
    <div key={index}>{point}</div>
  ))}
</h3> */}
             <div className="slider-buttons0">
  <Link to="/watch">  <button className="btn0 btn-primary0">▶ Watch Showreel</button></Link>
   <Link to="/contact"> <button className="btn0 btn-outline0">Contact Us</button></Link>
  </div>
        </div>
        

      </div>
    ))}
  </div>
</section>

  <section className="scale-section">
      
      <h2 className="scale-heading">
        We Do Just Promote, We Help Scale by Connecting the Right Market & Partners
      </h2>

      <div className="scale-container">
        {scaleData.map((item, index) => (
          <div className="scale-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

    </section>

      {/* <section className="agency-section">

      {data.map((item, index) => (
        <div className="agency-box" key={index}>
          
          <h2 className="agency-heading">{item.title}</h2>

          <div className="agency-content">

            <div className="agency-text">
              <p>{item.text}</p>
            </div>

            <div className="agency-image">
              <img src={item.img} alt={item.title} />
            </div>

          </div>

        </div>
      ))}

    </section> */}


    <section className="services-section2" style={{backgroundColor:"#111"}}>

    <h2 className="services-heading">
  About & Services
</h2>

      <div className="services-container2">

        {/* LEFT SIDE */}

        <div className="services-left2">

          <h3>
            18+ Years of Excellence in Ad Film Making & TV Broadcasting
          </h3>

          <img src="/h1.webp" alt="advertising" />

          <p>
          Pooja Movie Creations is a pioneer in the world of Ad Film Making and TV Broadcasting.
For over 18 years, we have been creating impactful advertising solutions that connect brands with millions of...
          </p>
        <div className="btn-group">
  <Link to="/about" className="read-more-btn2">
    Read More →
  </Link>
</div>

        </div>


        {/* RIGHT SIDE */}

        <div className="services-right2" style={{backgroundColor:"#111"}}>

          {services.map((service, index) => (

            <Link to={service.link} className="service-card2" key={index} style={{backgroundColor:"#111"}}>

              <div className="icon2">
                {service.icon}
              </div>

              <h4>{service.title}</h4>

            </Link>

          ))}

        </div>

      </div>

    </section>


    



      <section className="services-section1" style={{backgroundColor:"#111"}}>
<h2 className="services-heading1" data-text="Our Services">
  Our Services
</h2>

        <div className="services-container1">

          <Link to="/tvadd">
          <div className="service-card1">
            <img src="/hs1.webp" alt="Service 1" />
            <h3>TV Advertising</h3>
            <p>Expand your brand’s reach with Pooja Movie Creations’ TV Advertising. With nationwide visibility and unmatched...</p>
          </div></Link>
          
          <Link to="/tvc">
          <div className="service-card1">
            <img src="/hs2.webp" alt="Service 2" />
            <h3>TVC Making</h3>
            <p>Bring your brand vision to life with Pooja Movie Creations’ TVC Making. From concept ideation to full-scale ...</p>
          </div></Link>


          <Link to="/tvadfilm">
          <div className="service-card1">
            <img src="/hs3.webp" alt="Service 3" />
            <h3>TV Ad Film Production</h3>
            <p>Make your brand unforgettable with Pooja Movie Creations’ TV Ad Film Production. From creative...</p>
          </div></Link>


          <Link to="/web">
          <div className="service-card1">
            <img src="/hs4.webp" alt="Service 4" />
            <h3>Web Series Production</h3>
            <p>Bring stories to life with Pooja Movie Creations’ Web Series Production. From concept development to high-quality...</p>
          </div></Link>
        </div>


        <div className="services-button1">
          <Link to="/service" className="main-link1">
            View All Services →
          </Link>
        </div>
      </section>


       <section className="why-section2">
    <h2 className="why-heading2" data-text="Why Choose Us">
  Why Choose Us
</h2>

      <div className="why-container2">
        {data2.map((item, index) => (
          <div className="why-card2" key={index}>
            <div className="why-icon2">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>


      <section className="ipl-section">
   <h2 className="ipl-heading" data-text="IPL Advertising">
  IPL Advertising
</h2>

        <div className="ipl-container">

          <div className="ipl-card">
            <img src="/hi.webp" alt="Stadium Branding" />
            <div className="ipl-overlay">
              <h3>Stadium Branding</h3>
              <p>Get maximum exposure during IPL matches with stadium banners, stands, and boundary rope branding...</p>
              <Link to="/stadium-Branding">Read More →</Link>
            </div>
          </div>

          <div className="ipl-card">
            <img src="/hi2.webp" alt="Team Sponsorship" />
            <div className="ipl-overlay">
              <h3>LED Screen Ads</h3>
              <p>Advertise on stadium LED screens during live matches, grabbing attention of both stadium audiences...</p>
              <Link to="/team">Read More →</Link>
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
              <Link to="/ott">Read More →</Link>
            </div>
          </div>

        </div>
      </section>

      <div className="slider-wrapper4">
     <h2 className="slider-heading4" data-text="Exclusive Advertising">
  Exclusive Advertising
</h2>
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



<div className="slider-wrapper5" style={{ background: "#111" }}>
  
  <h2 className="slider-heading5" data-text="Premium Channels">
    Premium Channels
  </h2>

  <p style={{ textAlign: "center", color: "#fff" }}>
    Apne brand ko top TV & OTT channels par showcase karein.
    Smooth slider me premium partner channels dekhein.
  </p>

  <div className="slider5">
    <div className="slide-track5">
      {images5.concat(images5).map((item, index) => (
        <div className="slide5" key={index}>
          <img src={item.img} alt="slider" />

          <div className="slide-text">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  </div>

</div>




      <div className="slider-wrapper7">
       <h2 className="slider-heading7" data-text="News Channels">
  News Channels
</h2>
        <p style={{ textAlign: "center", color: "#fff" }}>Bharat ke top news channels par apna brand showcase karein.</p>
        <div className="slider7">
          <div className="slide-track7">
            {images6.concat(images6).map((img, index) => (
              <div className="slide7" key={index}>
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
        <h2 
  className="exclusive-heading" 
  data-text="OUR EXCLUSIVE ADVERTISING MEDIA"
>
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
          <Link to="/work" className="main-link1">
            View More →
          </Link>
        </div>
      </section>



      <section className="exclusive-media-section2">
    <h2 className="exclusive-heading2" data-text="OUR AWARDS">
  OUR AWARDS
</h2>
        <div className="exclusive-container2">
          {cards2.map((card, index) => (
            <div className="exclusive-card2" key={index}>
              <img src={card.image} alt={card.title} />
              <p>{card.title}</p>
            </div>
          ))}
        </div>

        <div className="services-button2">
          <Link to="/award" className="main-link2">
            View All Awards →
          </Link>
        </div>
      </section>

      <section className="exclusive-media-section3">
      <h2 className="exclusive-heading3" data-text="Celebrities">
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
       <h2 className="exclusive-heading4" data-text="Gallery">
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
          <Link to="/gallery" className="main-link2">
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



   <div className="slider-wrapper9">
     <h2 className="slider-headin9" data-text="Our Clients">
  Our Clients
</h2>
        <div className="slider9">
          <div className="slide-track9">
            {images9.concat(images4).map((img, index) => (
              <div className="slide9" key={index}>
                <img src={img} alt="slider" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="hotdeal-section">
        <div className="hotdeal-container">

        <h2 className="wave-heading" data-text="🔥 Hot Deal Packages">
  🔥 Hot Deal Packages
</h2>

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


      <section className="contact-section">

<h2 className="contact-heading wave-heading" data-text="Contact Us">
  Contact Us
</h2>

  <div className="contact-container">

    {/* LEFT SIDE */}
    <div className="contact-left">
      <h3>📍 Get in Touch</h3>

      <p>
        <strong>Address:</strong> 167, Block A, Sector 63A,<br />
        Sector 62, Noida, Uttar Pradesh 201301
      </p>

      <p><strong>Phone:</strong> +91 98765 43210</p>
      <p><strong>Email:</strong> info@poojamoviecreations.com</p>
    </div>

    {/* RIGHT SIDE */}
    <div className="contact-right">
      <h3>✉️ Send Us a Message</h3>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>

  </div>

  {/* MAP */}
  <div className="contact-map">
    <iframe
      src="https://maps.google.com/maps?q=noida%20sector%2062&t=&z=13&ie=UTF8&iwloc=&output=embed"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>

</section>










    </>

  );
};

export default Home;
