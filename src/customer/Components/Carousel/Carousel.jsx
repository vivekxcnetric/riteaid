// import React from "react";
// import Slider from "react-slick";
// import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// // Sample products data based on your design
// const sampleProducts = [
//   {
//     id: 1,
//     name: "ALICE",
//     image:
//       "https://www.riteaid.com/shop/media/catalog/product/d/k/dky0x9kyjlbiiwihr9dd.jpg",
//     priceWithTax: 4999,
//   },
//   {
//     id: 2,
//     name: "AVIATOR TITANIUM",
//     image:
//       "https://www.riteaid.com/shop/media/catalog/product/d/k/dky0x9kyjlbiiwihr9dd.jpg",
//     priceWithTax: 6999,
//   },
//   {
//     id: 3,
//     name: "ALAIN",
//     image:
//       "https://www.riteaid.com/shop/media/catalog/product/d/k/dky0x9kyjlbiiwihr9dd.jpg",
//     priceWithTax: 5499,
//   },
//   {
//     id: 4,
//     name: "CHRIS OPTICS",
//     image:
//       "https://www.riteaid.com/shop/media/catalog/product/d/k/dky0x9kyjlbiiwihr9dd.jpg",
//     priceWithTax: 6499,
//   },
//   {
//     id: 5,
//     name: "JUSTIN OPTICS",
//     image:
//       "https://www.riteaid.com/shop/media/catalog/product/d/k/dky0x9kyjlbiiwihr9dd.jpg",
//     priceWithTax: 7299,
//   },
//   {
//     id: 6,
//     name: "ERIKA OPTICS",
//     image:
//       "https://www.riteaid.com/shop/media/catalog/product/d/k/dky0x9kyjlbiiwihr9dd.jpg",
//     priceWithTax: 5999,
//   },
//   {
//     id: 7,
//     name: "WAYFARER OPTICS",
//     image:
//       "https://www.riteaid.com/shop/media/catalog/product/d/k/dky0x9kyjlbiiwihr9dd.jpg",
//     priceWithTax: 7899,
//   },
// ];

// const CarouselContainer = styled.div`
//   width: 90%;
//   margin: auto;
// `;

// const ProductCard = styled.div`
//   padding: 15px;
//   position: relative;
//   marginleft: 10px;
//   marginright: 10px;

//   text-align: center;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }

//   img {
//     width: 70%;
//     height: auto;
//     border-radius: 8px;
//     margin-bottom: 10px;
//     padding: 10;
//   }

//   h4 {
//     font-size: 1rem;
//     font-weight: 600;
//     margin: 10px 0 5px;
//     color: #333;
//   }

//   p {
//     font-size: 1.2rem;
//     font-weight: 700;
//     color: #007bff; /* Accent color for price */
//     margin: 0;
//   }
// `;

// const Arrow = styled.div`
//   font-size: 2.5rem;
//   z-index: 999;
//   color: black;
//   cursor: pointer;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
// `;

// const PrevArrow = (props) => (
//   <Arrow style={{ left: "10px" }} onClick={props.onClick}>
//     <MdKeyboardArrowLeft className="z-999 bg-gray-200 rouded-full" />
//   </Arrow>
// );

// const NextArrow = (props) => (
//   <Arrow style={{ right: "10px" }} onClick={props.onClick}>
//     <MdKeyboardArrowRight />
//   </Arrow>
// );

// const Carousel = ({ text }) => {
//   const [products, setProducts] = React.useState(sampleProducts); // Using sample data as default state
//   const navigate = useNavigate();

//   const settings = {
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const handleProductClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   return (
//     <CarouselContainer>
//       <h1 className="text-center text-2xl font-bold">Advertised Products</h1>
//       <Slider {...settings}>
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             onClick={() => handleProductClick(product.id)}
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="mb-4 rounded-lg"
//             />
//             <h4 className="text-lg font-bold text-foreground">
//               {product.name}
//             </h4>
//             <p className="block text-xl font-semibold text-primary">
//               ₹{product.priceWithTax.toLocaleString()}
//             </p>
//             <button className="mt-4 w-full bg-indigo-800 text-white hover:bg-secondary/80 py-2 rounded-lg">
//               Add to Cart
//             </button>
//           </ProductCard>
//         ))}
//       </Slider>
//     </CarouselContainer>
//   );
// };

// export default Carousel;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { receiveProducts } from "../../../action";

const CarouselContainer = styled.div`
  width: 90%;
  margin: auto;
`;

const ProductCard = styled.div`
  padding: 15px;
  position: relative;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 70%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 10px 0 5px;
    color: #333;
    white-space: nowrap; /* Prevents wrapping to a new line */
    overflow: hidden; /* Hides overflowing text */
    text-overflow: ellipsis; /* Shows "..." for overflow */
  }

  p {
    font-size: 1.2rem;
    font-weight: 700;
    color: #007bff;
    margin: 0;
  }
`;

const Arrow = styled.div`
  font-size: 2.5rem;
  z-index: 999;
  color: black;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const PrevArrow = (props) => (
  <Arrow style={{ left: "10px" }} onClick={props.onClick}>
    <MdKeyboardArrowLeft />
  </Arrow>
);

const NextArrow = (props) => (
  <Arrow style={{ right: "10px" }} onClick={props.onClick}>
    <MdKeyboardArrowRight />
  </Arrow>
);

const Carousel = ({ text }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    receiveProducts()
      .then((data) => {
        console.log("Fetched products:", data.products?.items); // Log the data
        setProducts(data?.products?.items || []); // Check if the data is set correctly
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
      });
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <CarouselContainer>
      <h1 className="text-center text-2xl font-bold">
        {text || "Advertised Products"}
      </h1>
      <Slider {...settings}>
        {products.length > 0 ? (
          products.map((product) => {
            const variant = product.variants?.[0]; // Check if variants exist
            return (
              <ProductCard
                key={product.id}
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.featuredAsset?.preview || ""}
                  alt={product.name || "Product"}
                  className="mb-4 rounded-lg"
                />
                <h4 className="text-lg font-bold">
                  {product.name || "No Name"}
                </h4>
                <p className="block text-xl font-semibold text-primary">
                  ${variant?.priceWithTax?.toLocaleString() || "N/A"}
                </p>
                {/* <button className="mt-4 w-full bg-indigo-800 text-white hover:bg-secondary/80 py-2 rounded-lg">
                  Add to Cart
                </button> */}
              </ProductCard>
            );
          })
        ) : (
          <p className="text-center">No products available</p>
        )}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
