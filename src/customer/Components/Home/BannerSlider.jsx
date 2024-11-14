// import React, { useState, useEffect } from "react";
// import b1 from "./banners/b1.png";
// import b2 from "./banners/b2.png";
// import b3 from "./banners/b3.png";

// const banners = [{ imageSrc: b1 }, { imageSrc: b2 }, { imageSrc: b3 }];

// const BannerSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
//     }, 5000);
//     return () => clearInterval(timer); // Clean up on unmount
//   }, []);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prevSlide) => (prevSlide - 1 + banners.length) % banners.length
//     );
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
//   };

//   return (
//     <div className="relative w-full h-[70vh] overflow-hidden mb-10">
//       {/* Banner Images */}
//       {banners.map((banner, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 p-2 ${
//             index === currentSlide ? "opacity-100" : "opacity-0"
//           }`}
//           style={{
//             width: "100%",
//             height: "100%",
//           }}
//         >
//           <img
//             src={banner.imageSrc}
//             alt={`Banner ${index + 1}`}
//             className="w-full h-full object-contain"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BannerSlider;

import React, { useState, useEffect } from "react";
import b1 from "./banners/b1.png";
import b2 from "./banners/b2.png";
import b3 from "./banners/b3.png";

const banners = [{ imageSrc: b1 }, { imageSrc: b2 }, { imageSrc: b3 }];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + banners.length) % banners.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden mb-10">
      {/* Banner Images */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={banner.imageSrc}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover md:object-contain"
          />
        </div>
      ))}
      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white hidden md:block"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white hidden md:block"
      >
        &#9654;
      </button>
      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
