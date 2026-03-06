import React from "react";
import "../Style/client.css";

const clients = [
  { id: 1, img: "/c1.webp" },
  { id: 2, img: "/c2.webp" },
  { id: 3, img: "/c3.webp" },
  { id: 4, img: "/c4.webp" },
  { id: 5, img: "/c5.webp" },
  { id: 6, img: "/c6.webp" },
  { id: 7, img: "/c7.webp" },
  { id: 8, img: "/c8.webp" },
  { id: 9, img: "/c9.webp" },
  { id: 10, img: "/c10.webp" },
  { id: 11, img: "/c11.webp" },
  { id: 12, img: "/c12.webp" },
  { id: 13, img: "/c13.webp" },
];

function Clients() {
  return (
    <section className="clients">
      <div className="container">

        <h2 className="clients-heading">
          What Our Clients Say
        </h2>

        <div className="clients-grid">
          {clients.map((item) => (
            <div className="client-card" key={item.id}>
              <img src={item.img} alt="client" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Clients;