// import React, { useEffect, useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";
// import { MdLocalShipping, MdStore, MdDeliveryDining } from "react-icons/md";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { receiveProductsById, AddItemToCartNew } from "../../../../action";
// import Spinner from "../../Spinners/Spinner";

// const ProductDetailPage = () => {
//   const { productId } = useParams();
//   const dispatch = useDispatch();

//   const [productData, setProductData] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);

//   // Assume this selector gets the login state from Redux or context
//   const isLoggedIn = useSelector((state) => state.auth.user);

//   useEffect(() => {
//     const fetchProductData = async () => {
//       try {
//         setLoading(true);
//         const { product } = await receiveProductsById(productId); // Fetch product by ID
//         setProductData(product);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductData();
//   }, [productId]);

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handleAddToCart = () => {
//     if (productData) {
//       const data = {
//         productVariantId: productData?.variants?.[0]?.id,
//         quantity,
//       };
//       AddItemToCartNew(data);
//     }
//   };

//   if (loading) return <Spinner />;

//   if (!productData) return <p>Product not found.</p>;

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       {/* Breadcrumb */}
//       <nav className="text-gray-500 text-sm mb-4">
//         Home / Shop Rite Aid / Household & Pet / Paper & Plastic / Bath Tissue
//       </nav>

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Product Image and Thumbnails */}
//         <div className="flex-1">
//           <img
//             src={productData?.images?.[0]?.url}
//             alt={productData?.name || "Product Image"}
//             className="w-full rounded-lg"
//           />
//           <p className="text-sm text-gray-500 mt-2">
//             Roll over or click image to zoom in
//           </p>
//           {/* Thumbnail images (if available) */}
//           <div className="flex mt-4 gap-2">
//             {productData?.variants?.[0]?.images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img.url}
//                 alt={`Thumbnail ${index + 1}`}
//                 className="w-16 h-16 rounded-lg border"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="flex-1">
//           <h1 className="text-2xl font-bold">{productData?.name}</h1>
//           <p className="text-gray-700 mt-2">
//             {productData?.brand || "Unknown Brand"}
//           </p>

//           {/* Ratings and Reviews */}
//           <div className="flex items-center mt-2">
//             <span className="text-yellow-500">★★★★☆</span>{" "}
//             {/* Replace with actual rating */}
//             <span className="ml-2 text-gray-600">(4 reviews)</span>
//           </div>

//           {/* Price and Coupon */}
//           <p className="text-3xl font-semibold text-gray-800 mt-4">
//             ${productData?.variants?.[0]?.price || "N/A"}
//           </p>
//           {!isLoggedIn?.token && (
//             <button className="bg-pink-500 text-white px-4 py-1 rounded-full mt-2 font-semibold text-sm">
//               Sign In To Clip Coupon
//             </button>
//           )}
//           <p className="text-pink-500 mt-2 font-semibold text-sm">
//             Save $2.00 on any 2
//           </p>

//           {/* Quantity Selector and Add to Cart */}
//           <div className="mt-6 flex items-center gap-4">
//             <div className="flex items-center border rounded-full">
//               <button
//                 onClick={handleDecrease}
//                 className="px-3 py-1 text-gray-600"
//               >
//                 <FaMinus />
//               </button>
//               <span className="px-4">{quantity}</span>
//               <button
//                 onClick={handleIncrease}
//                 className="px-3 py-1 text-gray-600"
//               >
//                 <FaPlus />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-900"
//             >
//               Add To Cart
//             </button>
//           </div>

//           {/* Shipping Information with Icons */}
//           <div className="mt-6 space-y-2">
//             <div className="flex items-center text-gray-700">
//               <MdLocalShipping className="text-2xl mr-2" />
//               <p>
//                 <strong>Shipping:</strong> In stock Online. Usually ships in 2
//                 to 4 business days.
//               </p>
//             </div>
//             <div className="flex items-center text-gray-700">
//               <MdStore className="text-2xl mr-2" />
//               <p>
//                 <strong>Free pickup at store in 1 hour</strong> - To see
//                 availability{" "}
//                 <span className="text-blue-600 underline cursor-pointer">
//                   Select a Store
//                 </span>
//               </p>
//             </div>
//             <div className="flex items-center text-gray-700">
//               <MdDeliveryDining className="text-2xl mr-2" />
//               <p>
//                 <strong>Delivery</strong> within 3 hours*{" "}
//                 <span className="text-blue-600 underline cursor-pointer">
//                   Check Availability
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* Responsibly Sourced Badge */}
//           <div className="mt-6 flex items-center">
//             <img
//               src="https://via.placeholder.com/24"
//               alt="Responsibly Sourced"
//               className="mr-2"
//             />
//             <span className="text-green-600 font-semibold">
//               Responsibly Sourced
//             </span>
//           </div>

//           {/* Additional Links */}
//           <p className="mt-6 text-blue-600 underline cursor-pointer">
//             Questions about pickup, delivery, or shipping?{" "}
//             <span className="text-gray-700">Learn More</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus, FaStar, FaRegStar } from "react-icons/fa";
import { MdLocalShipping, MdStore, MdDeliveryDining } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { receiveProductsById } from "../../../../action";
import Spinner from "../../Spinners/Spinner";
import toast, { Toaster } from "react-hot-toast";
import { AddItemToCartNew } from "../../../../action/cart";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const [productData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [openSection, setOpenSection] = useState(null);

  const isLoggedIn = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const { product } = await receiveProductsById(productId);
        setProductData(product);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    if (productData) {
      const data = {
        productVariantId: productData?.variants?.[0]?.id,
        quantity,
      };
      AddItemToCartNew(data, productData);
    }
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (loading) return <Spinner />;
  if (!productData) return <p>Product not found.</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Toaster />
      <nav className="text-gray-500 text-sm mb-4">
        Home / Product Category / {productData.name}
      </nav>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1  p-4 ">
          <img
            src={productData?.images?.[0]?.url}
            alt={productData?.name || "Product Image"}
            className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Roll over or click image to zoom in
          </p>
          <div className="flex mt-4 gap-2 justify-center">
            {productData?.variants?.[0]?.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 rounded-lg border transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>

        <div className="flex-1  p-6 ">
          <h1 className="text-3xl font-bold">{productData?.name}</h1>
          <p className="text-gray-600 mt-2">
            {productData?.brand || "Unknown Brand"}
          </p>

          <div className="flex items-center mt-2">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
            <FaRegStar className="text-yellow-500" />
            <span className="ml-2 text-gray-600">(4 reviews)</span>
          </div>

          <p className="text-3xl font-semibold text-gray-800 mt-4">
            ${productData?.variants?.[0]?.price || "N/A"}
          </p>
          {!isLoggedIn?.token && (
            <button className="bg-pink-500 text-white px-4 py-1 rounded-full mt-2 font-semibold text-sm hover:bg-pink-600 transition-colors duration-200">
              Sign In To Clip Coupon
            </button>
          )}
          <p className="text-pink-500 mt-2 font-semibold text-sm">
            Save $2.00 on any 2
          </p>

          {/* Quantity Selector and Add to Cart */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border rounded-full shadow-lg">
              <button
                onClick={handleDecrease}
                className="px-3 py-1 text-gray-600 hover:text-gray-900"
              >
                <FaMinus />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-3 py-1 text-gray-600 hover:text-gray-900"
              >
                <FaPlus />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-900 transition-all duration-300"
            >
              Add To Cart
            </button>
          </div>

          {/* Shipping Information with Icons */}
          <div className="mt-6 space-y-2 text-gray-700">
            <div className="flex items-center">
              <MdLocalShipping className="text-2xl mr-2 text-blue-500" />
              <p>
                <strong>Shipping:</strong> In stock Online. Usually ships in 2
                to 4 business days.
              </p>
            </div>
            <div className="flex items-center">
              <MdStore className="text-2xl mr-2 text-green-500" />
              <p>
                <strong>Free pickup at store in 1 hour</strong> - To see
                availability{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  Select a Store
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <MdDeliveryDining className="text-2xl mr-2 text-orange-500" />
              <p>
                <strong>Delivery</strong> within 3 hours*{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  Check Availability
                </span>
              </p>
            </div>
          </div>

          {/* Responsibly Sourced Badge */}
          <div className="mt-6 flex items-center">
            <img
              src="https://www.riteaid.com/shop/static/version1731487660/frontend/RiteAid/default/en_US/images/Proudplanet_circle_small.png"
              alt="Responsibly Sourced"
              className="mr-2 w-6 h-6"
            />
            <span className="text-green-600 font-semibold">
              Responsibly Sourced
            </span>
          </div>

          <p className="mt-6 text-blue-600 underline cursor-pointer">
            Questions about pickup, delivery, or shipping?{" "}
            <span className="text-gray-700">Learn More</span>
          </p>
        </div>
      </div>

      {/* Collapsible Sections */}
      <div className="mt-8">
        <CollapsibleSection
          title="PRODUCT DETAILS"
          content={productData?.description || "No details available."}
          isOpen={openSection === "details"}
          onToggle={() => toggleSection("details")}
        />
        <CollapsibleSection
          title="MORE INFORMATION"
          content="Additional product information goes here."
          isOpen={openSection === "moreInfo"}
          onToggle={() => toggleSection("moreInfo")}
        />
        <CollapsibleSection
          title="HIGHLIGHTS"
          content="Key highlights and features of the product."
          isOpen={openSection === "highlights"}
          onToggle={() => toggleSection("highlights")}
        />
        <CollapsibleSection
          title="SAFETY"
          content="Safety information for using this product."
          isOpen={openSection === "safety"}
          onToggle={() => toggleSection("safety")}
        />
        <CollapsibleSection
          title="DIMENSIONS"
          content="Product dimensions and size information."
          isOpen={openSection === "dimensions"}
          onToggle={() => toggleSection("dimensions")}
        />
        <CollapsibleSection
          title="REVIEWS"
          content={<ReviewSection />}
          isOpen={openSection === "reviews"}
          onToggle={() => toggleSection("reviews")}
        />
      </div>
    </div>
  );
};

// Collapsible section component
const CollapsibleSection = ({ title, content, isOpen, onToggle }) => (
  <div className="border-t border-b py-3 cursor-pointer">
    <div
      onClick={onToggle}
      className="flex justify-between items-center text-lg font-semibold"
    >
      <span>{title}</span>
      {isOpen ? <FaMinus /> : <FaPlus />}
    </div>
    {isOpen && <div className="mt-3 text-gray-600 text-sm">{content}</div>}
  </div>
);

// Review section with a rating breakdown
const ReviewSection = () => (
  <div>
    <p className="text-xl font-bold">Overall Rating</p>
    <p className="text-3xl font-semibold text-yellow-500">4.8 ★★★★☆</p>
    <div className="mt-4">
      {[5, 4, 3, 2, 1].map((star) => (
        <div key={star} className="flex items-center mt-2">
          <span className="w-8 text-gray-600">{star} star</span>
          <div className="w-full h-4 bg-gray-200 rounded-full mx-2">
            <div
              className="h-4 bg-blue-500 rounded-full"
              style={{ width: `${(6 - star) * 20}%` }}
            ></div>
          </div>
          <span className="text-gray-600">{(6 - star) * 10}</span>
        </div>
      ))}
    </div>
    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-200">
      Review This Product
    </button>
  </div>
);

export default ProductDetailPage;
