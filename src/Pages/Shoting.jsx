import React from "react";
import "../Style/shoting.css";

const Shooting = () => {
  const images = Array.from({ length: 68 }, (_, i) => `/hm${i + 1}.jfif`);

  return (
    <section className="gallery-section">
      <h2 className="gallery-heading">Our Shooting Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`shoot-${index}`} />
        ))}
      </div>
    </section>
  );
};

export default Shooting;