import React, { useState, useEffect } from "react";
import "../Style/tvc.css"

const Tvc = () => {

const galleries = {
  tvc:["/tm1.webp","/tm2.webp","/tm3.webp"],
  photoshoot:["/tm4.webp","/tm5.webp","/tm6.webp"],
  webseries:["/tm11.webp","/tm12.webp","/tm13.webp"],
  making:["/tm14.webp","/tm15.webp","/tm16.webp"]
};

const [active,setActive] = useState("tvc");
const [index,setIndex] = useState(0);

const nextSlide = ()=>{
setIndex((prev)=> (prev+1) % galleries[active].length);
};

const prevSlide = ()=>{
setIndex((prev)=> (prev-1 + galleries[active].length) % galleries[active].length);
};

useEffect(()=>{
const interval = setInterval(()=>{
nextSlide();
},3000);

return ()=> clearInterval(interval);

},[active]);





const data = [
{
video:"https://www.youtube.com/embed/oOSgGF9dHPM",
title:"Energy Drink Buzz – High Impact TVC",
text:"A bold and energetic ad film created to launch and position the Buzz energy drink brand with maximum impact."
},

{
video:"https://www.youtube.com/embed/G7yX-0BpPGo",
title:"Energy Drink Product TVC",
text:"A crisp, stylish commercial highlighting the features of an energy drink, tailored for youth and fitness audiences."
},

{
video:"https://www.youtube.com/embed/gAw9pZk_v4g",
title:"Nitya Electrocontrol – Corporate TVC",
text:"A professional ad film crafted for Nitya Electrocontrol showcasing trust, reliability, and technological expertise."
},

{
video:"https://www.youtube.com/embed/A0OlEoVBzgU",
title:"Product Awareness TVC",
text:"A concise and engaging commercial designed to introduce a new product line to a wide audience."
},

{
video:"https://www.youtube.com/embed/3WR_wygiUXs",
title:"Lifestyle Product Commercial",
text:"An aspirational TVC connecting with lifestyle audiences through elegant visuals and storytelling."
},

{
video:"https://www.youtube.com/embed/zFZGJpgjF7A",
title:"Fashion & Style TVC",
text:"A high-energy commercial designed for fashion and style branding, highlighting trends with a cinematic appeal."
},

{
video:"https://www.youtube.com/embed/tjv-Yse7h9k",
title:"Consumer Product Advertisement",
text:"A TVC that builds product recognition and appeals directly to everyday consumer needs."
},

{
video:"https://www.youtube.com/embed/vKB6mpYKWvw",
title:"Premium Brand TVC",
text:"A luxury-focused ad designed to highlight premium value and connect with high-end customers."
},

{
video:"https://www.youtube.com/embed/NwStX1KEzdE",
title:"Corporate Advertising Film",
text:"A brand-building corporate film crafted for showcasing organizational strength and professionalism."
},

{
video:"https://www.youtube.com/embed/oiGCrNjQybc",
title:"Digital Platform Ad",
text:"A TVC optimized for digital and OTT platforms to reach modern tech-savvy audiences."
},

{
video:"https://www.youtube.com/embed/ssbZUYJjNu4",
title:"Retail Product TVC",
text:"A smart commercial made to boost sales and build recall value for retail-level products."
},

{
video:"https://www.youtube.com/embed/E03LEjiz0b4",
title:"Event Promotion TVC",
text:"A promotional ad film tailored for events and marketing campaigns, engaging audiences with visuals and music."
}
];



const services = [
{
icon:"📖",
title:"Scriptwriting",
text:"Creative scripts written to connect with your target audience."
},

{
icon:"🎥",
title:"Cinematography",
text:"High-end cameras & modern techniques for cinematic visuals."
},

{
icon:"🎬",
title:"Direction",
text:"Expert directors ensure every frame has impact & meaning."
},

{
icon:"👩‍🎤",
title:"Casting",
text:"Selecting professional actors/models to represent your brand."
},

{
icon:"🎨",
title:"Set & Art Design",
text:"Custom-built sets with professional art direction."
},

{
icon:"💄",
title:"Makeup & Styling",
text:"High-quality styling, wardrobe & professional makeup."
},

{
icon:"✂️",
title:"Editing & VFX",
text:"Post-production with editing, sound design & color grading."
},

{
icon:"📺",
title:"Multi-Platform Ads",
text:"Distribution across TV, OTT & Digital platforms."
},

{
icon:"🎯",
title:"Brand Strategy",
text:"We help brands create the right message & positioning before production."
}
];




const logos = [
"/tm21.webp",
"/tm22.webp",
"/tm23.webp",
"/tm24.webp",
"/tm25.webp",
"/tm26.webp",
"/tm27.webp",
"/tm28.webp",
"/tm29.webp",
];



return (
<>

<div className="tvc-page">

{/* Banner Section */}

<section className="tvc-banner">
<div className="tvc-banner-content">
<h1>TVC Making</h1>

<p>
Creating High-Quality Commercials That Build Brand Identity &
Capture Audiences
</p>

</div>
</section>


{/* What is TVC */}

<section className="tvc-info">

<h2 className="tvc-heading">
What is the use of TVC making?
</h2>

<p className="tvc-text">

TVC (Television Commercial) Making is the art of creating impactful
advertisements that build a brand’s image, communicate its message,
and connect emotionally with the audience.

</p>

</section>


{/* Why TVC */}

<section className="tvc-why">

<h2 className="tvc-heading">
Why TVC is Required for a brand?
</h2>

<div className="tvc-why-container">

<div className="tvc-why-left">

<p>In today’s competitive market, TVCs play a crucial role in:</p>

<ul>
<li>✅ Building strong brand identity</li>
<li>✅ Reaching millions via TV, OTT & Digital Platforms</li>
<li>✅ Creating trust with cinematic quality</li>
<li>✅ Attracting audience attention with high-quality visuals, music & storytelling</li>
</ul>

</div>

</div>

</section>

</div>


{/* Shooting Gallery */}

<section className="shooting-section">

<h2 className="shooting-title">Shooting Gallery</h2>

<div className="gallery-links">

<span onClick={()=>{setActive("tvc");setIndex(0);}}>
🎥 TVC Gallery
</span>

<span onClick={()=>{setActive("photoshoot");setIndex(0);}}>
📸 TVC Photoshoot
</span>

<span onClick={()=>{setActive("webseries");setIndex(0);}}>
🎬 Web Series Shooting
</span>

<span onClick={()=>{setActive("making");setIndex(0);}}>
🎞️ TVC Making
</span>

</div>


<div className="slider-box">

<button className="arrow left" onClick={prevSlide}>❮</button>

<img
src={galleries[active][index]}
alt=""
className="slider-img"
/>

<button className="arrow right" onClick={nextSlide}>❯</button>

</div>

</section>

<section className="tvcwork-section">

<h2 className="tvcwork-title">
Watch Our TVC Work
</h2>

<div className="tvcwork-grid">

{data.map((item,index)=>(
<div className="tvc-card" key={index}>

<div className="video-box">
<iframe
src={item.video}
title="YouTube video"
frameBorder="0"
allowFullScreen
></iframe>
</div>

<h3>{item.title}</h3>

<p>{item.text}</p>

</div>
))}

</div>

</section>


<section className="tvcservices-section">

<h2 className="tvcservices-title">
Our Complete TVC Services
</h2>

<div className="tvcservices-grid">

{services.map((item,index)=>(

<div className="service-card" key={index}>

<div className="service-icon">
{item.icon}
</div>

<h3>{item.title}</h3>

<p>{item.text}</p>

</div>

))}

</div>

</section>


<section className="channels-section">

<h2 className="channels-title">
Channels & Platforms
</h2>

<div className="logo-slider">

<div className="logo-track">

{logos.concat(logos).map((logo,index)=>(
<div className="logo-card" key={index}>
<img src={logo} alt="channel"/>
</div>
))}

</div>

</div>

</section>


</>
);
};

export default Tvc;