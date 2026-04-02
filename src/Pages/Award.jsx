import React from "react";
import "../Style/award.css";

const awardsData = [
  { id: 1, year: "2015", img: "/aw1.webp" },
  { id: 2, year: "2016", img: "/aw2.webp" },
  { id: 3, year: "2017", img: "/aw3.webp" },
  { id: 4, year: "2017", img: "/aw4.webp" },
  { id: 5, year: "2018", img: "/aw5.webp" },
  { id: 6, year: "2019", img: "/aw6.webp" },

  { id: 7, year: "2020", img: "/aw7.jfif" },
  { id: 8, year: "2020", img: "/aw8.jfif" },
  { id: 9, year: "2021", img: "/aw9.jfif" },
  { id: 10, year: "2021", img: "/aw10.jfif" },
  { id: 11, year: "2022", img: "/aw11.jfif" },
  { id: 12, year: "2022", img: "/aw12.jfif" },
  { id: 13, year: "2023", img: "/aw13.jfif" },
  { id: 14, year: "2023", img: "/aw14.jfif" },
  { id: 15, year: "2023", img: "/aw15.jfif" },
  { id: 16, year: "2024", img: "/aw16.jfif" },
  { id: 17, year: "2024", img: "/aw17.jfif" },
  { id: 18, year: "2024", img: "/aw18.jfif" },
  { id: 19, year: "2024", img: "/aw19.jfif" },
  { id: 20, year: "2024", img: "/aw20.jfif" },
  { id: 21, year: "2025", img: "/aw21.jfif" },
  { id: 22, year: "2025", img: "/aw22.jfif" },
  { id: 23, year: "2025", img: "/aw23.jfif" },
  { id: 24, year: "2025", img: "/aw24.jfif" },
  { id: 25, year: "2025", img: "/aw25.jfif" },
  { id: 26, year: "2025", img: "/aw26.jfif" },
  { id: 27, year: "2025", img: "/aw27.jfif" },
  { id: 28, year: "2025", img: "/aw28.jfif" },
  { id: 29, year: "2025", img: "/aw29.jfif" },
  { id: 30, year: "2025", img: "/aw30.jfif" },

];


const eventData = [
  { id: 1, src:"https://www.youtube.com/embed/eiidCXvVAgw?si=8ZYGIOUKazUR0-82" , title: " Our Events " },
  { id: 2, src:"https://www.youtube.com/embed/S_CX_CmAzr8?si=lJTN18yOdhMog-oU", title: "Our Events " },
  { id: 3, src:"https://www.youtube.com/embed/G3hbNAh8reI?si=AB-nW8GB8Trn3Ylz", title: "Our Events " },
  { id: 4, src:"https://www.youtube.com/embed/kONGiSrZpO4?si=sCG0D8SdTJRJLx4i", title: "Our Events " },
  { id: 5, src:"https://www.youtube.com/embed/SMUbbiNBt2w?si=a3kPSe-Anr4bPNtA", title: "Our Events " },
  { id: 6, src:"https://www.youtube.com/embed/-rObgEgZyrQ?si=VguBD3dfOxAwXFF6", title: "Our Events " },
  { id: 7, src:"https://www.youtube.com/embed/-rObgEgZyrQ?si=VguBD3dfOxAwXFF6", title: "Our Events " },
  { id: 8, src:"https://www.youtube.com/embed/fbCKGLn3B3c?si=rZP0zdNIiscvB902", title: "Our Events " },
  { id: 9, src:"https://www.youtube.com/embed/bMkvr-pVfls?si=5cFrdl_a70zRMENX", title: "Our Events " },
  { id: 10, src:"https://www.youtube.com/embed/hsVgADMwAls?si=jig36OnTBGAa6oRV", title: "Our Events " },
  { id: 11, src:"https://www.youtube.com/embed/7Rrxa3XRWto?si=Nk_tvZCzE6QAxZsh", title: "Our Events " },
  { id: 12, src:"https://www.youtube.com/embed/jDT9sXHE12I?si=xxSkRtS8MO80uI3c", title: "Our Events " },
  { id: 13, src:"https://www.youtube.com/embed/jDT9sXHE12I?si=xxSkRtS8MO80uI3c", title: "Our Events " },
  { id: 14, src:"https://www.youtube.com/embed/-Jt8sb3qvMI?si=0o_cBa4LI41XhQtA", title: "Our Events " },
  { id: 15, src:"https://www.youtube.com/embed/mTWXt4osov0?si=aiDoKq0-kP6g8cD0", title: "Our Events " },
  { id: 16, src:"https://www.youtube.com/embed/Xl4f4zGKtdc?si=vwqtyMHijhUDqmCT", title: "Our Events " },
  { id: 17, src:"https://www.youtube.com/embed/ouVz_F15pgc?si=x6P0lKscQnWlnZIV", title: "Our Events " },
  { id: 18, src:"https://www.youtube.com/embed/bGlWdEIkXpE?si=BDT-xIXPqymr-FJD", title: "Our Events " },
  { id: 19, src:"https://www.youtube.com/embed/WpkjbvE3VpA?si=kwa7w4mIvvvBHlKw", title: "Our Events " },
  { id: 20, src:"https://www.youtube.com/embed/-3lujHrkHQw?si=1sPRRhKbenckMKtG", title: "Our Events " },
  { id: 21, src:"https://www.youtube.com/embed/ilF06GL_1LQ?si=x_Ow3BVQ6tCQTKac", title: "Our Events " }
];


function Awards() {
  return (
    <>
    <section className="awards-section">
      <div className="container">

        <h2 className="awards-heading">
          Awards & Achievements
        </h2>

        <div className="awards-grid">
          {awardsData.map((award) => (
            <div className="award-card" key={award.id}>
              <img src={award.img} alt="award" />
              <h3>{award.year}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>



  <section className="events-section">
   <div className="events-grid">
  {eventData.map((event) => (
    <div className="event-card" key={event.id}>

      <iframe
        src={event.src}
        title={event.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h3>{event.title}</h3>

    </div>
  ))}
</div>
    </section>

    </>
  );
}

export default Awards;