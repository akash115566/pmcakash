import React from "react";
import "../Style/gallery.css";

const galleryData = [
    { id: 1, img: "/g1.webp" },
    { id: 2, img: "/g2.webp" },
    { id: 3, img: "/g3.webp" },
    { id: 4, img: "/g4.webp" },
    { id: 5, img: "/g5.webp" },
    { id: 6, img: "/g6.webp" },
    { id: 7, img: "/g7.webp" },
    { id: 8, img: "/g8.webp" },
    { id: 9, img: "/g9.webp" },
    { id: 10, img: "/g10.webp" },
    { id: 11, img: "/g11.webp" },
    { id: 12, img: "/g12.webp" },
    { id: 13, img: "/g13.webp" },
    { id: 14, img: "/g14.webp" },
    { id: 15, img: "/g15.webp" },
    { id: 16, img: "/g16.webp" },
    { id: 17, img: "/g17.webp" },
    { id: 18, img: "/g18.webp" },
    { id: 19, img: "/g19.webp" },
    { id: 20, img: "/g20.webp" },
    { id: 21, img: "/g21.webp" },
    { id: 22, img: "/g22.webp" },
    { id: 23, img: "/g23.webp" },
    { id: 24, img: "/g24.webp" },
    { id: 25, img: "/g25.webp" },
    { id: 26, img: "/g26.webp" },
    { id: 27, img: "/g27.webp" },
    { id: 28, img: "/g28.webp" },
    { id: 29, img: "/g29.webp" },
    { id: 30, img: "/g30.webp" },
    { id: 31, img: "/g31.webp" },
    { id: 32, img: "/g32.webp" },
    { id: 33, img: "/g33.webp" },
    { id: 34, img: "/g34.webp" },
    { id: 35, img: "/g35.webp" },
    { id: 36, img: "/g36.webp" },
    { id: 37, img: "/g37.webp" },
    { id: 38, img: "/g38.webp" },
    { id: 39, img: "/g39.webp" },
    { id: 40, img: "/g40.webp" },
    { id: 41, img: "/g41.webp" },
    { id: 42, img: "/g42.webp" },
    { id: 43, img: "/g43.webp" },
    { id: 44, img: "/g44.webp" },
    { id: 45, img: "/g45.webp" },
    { id: 46, img: "/g46.webp" },
    { id: 47, img: "/g47.webp" },
    { id: 48, img: "/g48.webp" },
    { id: 49, img: "/g49.webp" },
    { id: 50, img: "/g50.webp" },
    { id: 51, img: "/g51.webp" },
    { id: 52, img: "/g52.webp" },
    { id: 53, img: "/g53.webp" },
    { id: 54, img: "/g54.webp" },
    { id: 55, img: "/g55.webp" },
    { id: 56, img: "/g56.webp" },
    { id: 57, img: "/g57.webp" },
    { id: 58, img: "/g58.webp" },
    { id: 59, img: "/g59.webp" },
    { id: 60, img: "/g60.webp" },
    { id: 61, img: "/g61.webp" },
    { id: 62, img: "/g62.webp" },
    { id: 63, img: "/g63.webp" },
    { id: 64, img: "/g64.webp" },
    { id: 65, img: "/g65.webp" },
    { id: 66, img: "/g66.webp" },
    { id: 67, img: "/g67.webp" },
    { id: 68, img: "/g68.webp" },
    { id: 69, img: "/g69.webp" },

];
function Gallery() {
    return (
        <section className="gallery-section">
            <div className="container">

                <h2 className="gallery-heading">
                    📸 Our Gallery
                </h2>

                <div className="gallery-grid">
                    {galleryData.map((item) => (
                        <div className="gallery-card" key={item.id}>
                            <img src={item.img} alt="gallery" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Gallery;