  
  import React from 'react'
  import "../Style/service.css"
  



  const cardData = [
    { img: "/s11.webp", title: "TV Advertising", text: "Expand your brand’s reach with Pooja Movie Creations’ TV Advertising. With nationwide visibility and unmatched influence, television remains one of the most powerful platforms to connect with audiences. From prime-time spots to impactful storytelling, we ensure your brand message reaches millions of viewers with maximum recall and emotional impact." },
  { img: "/s12.webp", title: "TVC Making", text: "Bring your brand vision to life with Pooja Movie Creations’ TVC Making. From concept ideation to full-scale production, we create powerful television commercials that blend creativity, storytelling, and visual excellence. Designed to engage, inspire, and leave a lasting impression – our TVCs ensure your brand connects with millions on screen." },
  { img: "/s13.webp", title: "TV Ad Film Production", text: "Make your brand unforgettable with Pooja Movie Creations’ TV Ad Film Production. From creative concepts to cinematic execution, we craft impactful TV commercials that capture attention and connect emotionally with audiences. With high-quality visuals, strong storytelling, and wide reach, we ensure your brand shines on the small screen with a big impact." },
  { img: "/s2.webp", title: "Web Series Production", text: "Bring stories to life with Pooja Movie Creations’ Web Series Production. From concept development to high-quality execution, we create engaging, binge-worthy content that connects with audiences across digital platforms. With cinematic storytelling, creative direction, and professional production, we transform ideas into web series that entertain, inspire, and leave a lasting impact." },
  { img: "/s3.webp", title: "Corporate Film Production", text: "Tell your brand’s story with impact through Pooja Movie Creations’ Corporate Film Production. From powerful storytelling to high-quality visuals, we create engaging films that showcase your company’s values, products, and vision. Perfect for brand promotions, employee engagement, client presentations, and events – we turn your business into a cinematic experience." },
  { img: "/s4.webp", title: "Radio FM Advertising", text: "Pooja Movie Creations offers powerful Radio FM Advertising services to help your brand connect with millions of listeners.Promote your products and services through local and national radio channels, ensuring maximum reach, high engagement, and strong brand recall.With cost-effective campaigns, we make your business stand out and reach the right audience at the right time." },
  { img: "/s5.webp", title: "PVR Cinemas Advertising", text: "Put your brand on the big screen with Pooja Movie Creations’ PVR Cinemas Advertising. Captivate audiences in a larger-than-life cinematic experience where your message shines before blockbuster movies. With high recall, premium reach, and an engaged audience, we make your brand the real star of the show." },
  { img: "/s6.webp", title: "Airport Advertising", text: "Elevate your brand presence with Pooja Movie Creations’ Airport Advertising. From digital screens to premium display spaces, we place your message in front of high-value travelers and global audiences. With unmatched visibility and a premium environment, your brand takes off to new heights." },
  { img: "/s7.webp", title: "Hoardings Advertising", text: "Take your brand to the streets with Pooja Movie Creations’ Hoardings Advertising. Bold, eye-catching, and larger-than-life – our hoardings ensure your message stands tall and captures maximum attention. From prime city locations to high-traffic zones, we help your brand dominate the skyline and stay unforgettable." },
  { img: "/s8.webp", title: "Metro Advertising", text: "Reach thousands of daily commuters with Pooja Movie Creations’ Metro Advertising. From station displays to train wraps, we create high-impact campaigns that grab attention and maximize visibility. With every ride, your brand travels further – ensuring stronger recall and wider reach." },
  { img: "/s9.webp", title: "Print Advertising", text: "Make your brand unforgettable with Pooja Movie Creations’ Print Advertising. From eye-catching designs to impactful messaging, we deliver creative print campaigns that capture attention and leave a lasting impression. Whether it’s newspapers, magazines, brochures, or flyers – we bring your brand to life on paper." },
  { img: "/s10.webp", title: "Digital Live Screen Advertising", text: "Showcase your brand on the big screen with Pooja Movie Creations’ Digital Live Screen Advertising. From dynamic visuals to real-time promotions, we make sure your message reaches the right audience with maximum impact. Perfect for events, launches, and brand campaigns – let your story shine brighter than ever!" },
];
  const Service = () => {
    return (
    <>
     <section className="about-hero1">
      <div className="about-overlay1">
        <div className="about-content1">
          <h1>
         Our Service
          </h1>
        
        </div>
      </div>
    </section>

     <section className="services-section">
      <div className="services-grid">
        {cardData.map((card, index) => (
          <div className="service-card" key={index}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
    </>
    )
  }
  
  export default Service
  