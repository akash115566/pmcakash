import React from "react";
import "../Style/watch.css";

const Watch = () => {
  return (
    <div className="watch-page">
      
      {/* Heading */}
      <h1 className="watch-heading">🎬 Watch Showreels</h1>

      {/* Video Section */}
      <div className="video-container">
      <video controls className="video-player">
  <source src="/video1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>

    </div>
  );
};

export default Watch;