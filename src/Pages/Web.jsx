import React from 'react'
import "../Style/web.css"

const Web = () => {
  return (
   <>
   <section className="webseries-page">

  {/* HERO SECTION */}
  <div className="webseries-hero">
    <div className="hero-overlay">
      <h1>Professional Web Series Production Services</h1>
     
    </div>
  </div>

  {/* SERVICES */}


    <div className="hero-overlay1">

      <h1>Bring Your Story to Life</h1>

      <p>
        At Pooja Movie Creations, we produce web series that captivate audiences
        and deliver cinematic experiences online. With a passionate team of
        scriptwriters, directors, cinematographers, and editors, we transform
        your vision into a successful web series ready for YouTube, OTT platforms,
        and beyond.
      </p>
    </div>
  <h2 className="section-heading">Our Services</h2>

  <div className="services-container">
 

    <div className="service-card">
      <h3>📖 Scriptwriting</h3>
      <p>Engaging stories crafted by professional writers for your target audience.</p>
    </div>

    <div className="service-card">
      <h3>🎥 Cinematography</h3>
      <p>High-end cameras and innovative filming techniques for cinematic visuals.</p>
    </div>

    <div className="service-card">
      <h3>🎬 Direction</h3>
      <p>Experienced directors who ensure every scene conveys emotion and impact.</p>
    </div>

    <div className="service-card">
      <h3>🎨 Post-Production</h3>
      <p>Editing, VFX, sound design, and color grading to elevate production quality.</p>
    </div>

  </div>

  {/* WHY CHOOSE US */}
  <h2 className="section-heading">Why Choose Us?</h2>

  <div className="why-box">
    <ul>
      <li><strong style={{color:'#f5c542'}}>✔</strong> Creative & Professional Team</li>
      <li><strong style={{color:'#f5c542'}}>✔</strong> Affordable Packages</li>
      <li><strong style={{color:'#f5c542'}}>✔</strong> End-to-End Production Support</li>
      <li><strong style={{color:'#f5c542'}}>✔</strong> High Cinematic Quality</li>
      <li><strong style={{color:'#f5c542'}}>✔</strong> On-Time Delivery</li>
    </ul>
  </div>

</section>
   
   </>
  )
}

export default Web
