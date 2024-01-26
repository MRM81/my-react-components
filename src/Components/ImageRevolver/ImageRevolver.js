import React from 'react'
import './imageRevolver.css'

const ImageRevolver = () => {


  const imageUrl = [
    "portfolio-banner.png",
    "portfolio-banner.png",
    "portfolio-banner.png",
  ];

  // const imageUrl = [];
  // for(var i = 0; i < 20; i++ ) {
  //   imageUrl.push("portfolio-banner.png")
  // }

  const slideDuration = 30;

  return (
    
    <div className="image-revolver-container">
      {imageUrl.map((url, index) => (
        <img
          key={index}
          className="revolving-image"
          src={url}
          alt={`Slide ${index + 1}`}
          style={{
            animationDuration: `${slideDuration}s`,
            animationDelay: `${index * slideDuration}s`,
          }}
        />
      ))}
    </div>
   
  );
};

export default ImageRevolver;
