import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "CholestOff Plus Softgels",
    price: 37.39,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Magnesium Citrate Gummies",
    price: 22.99,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Multivitamin Gummies",
    price: 19.99,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Immune Max Drink Mix",
    price: 19.99,
    image: "https://via.placeholder.com/100",
  },
];

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="overflow-hidden container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Advertised Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 mx-auto mb-4 object-contain"
              />
              <h3 className="font-semibold text-sm">{product.name}</h3>
              <p className="text-lg font-semibold mt-2">
                ${product.price.toFixed(2)}
              </p>
              <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
