import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { motion } from 'framer-motion';

import Spinner from "../customer/Components/Spinners/Spinner";
import CategoryGrid from "../customer/Components/Home/CategoryGrid";
import AdvertisedProducts from "../customer/Components/Carousel/AdvertiesProduct";
import { API_BASE_URL } from "../config/api";
import BannerSlider from "../customer/Components/Home/BannerSlider";
import Carousel from "../customer/Components/Carousel/Carousel"
const Homepage = () => {
  const [banners, setBanners] = useState();
  const [loading, setLoading] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);

  const staticBanners = [
    "https://www.riteaid.com/content/dam/riteaid-web/campaigns/fy25/home-page-banners/11-10-24-home-page-banners/Herobanner3.png",
    "https://www.riteaid.com/content/dam/riteaid-web/campaigns/fy25/home-page-banners/11-10-24-home-page-banners/herobanner1.png",
    "https://www.riteaid.com/content/dam/riteaid-web/campaigns/fy25/home-page-banners/11-10-24-home-page-banners/Herobanner2.png"
  ];

  // Banner Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % staticBanners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Fetch Banners from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/content`);
        setBanners(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <MainContainer>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* Dynamic Banner */}
          <Link to="/search">
            {/* <section
              className="relative h-[90vh] bg-cover bg-center transition-all duration-1000 ease-in"
              style={{ backgroundImage: `url(${staticBanners[currentBanner]})` }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute flex justify-center items-center"
              >
             
              </motion.div>
            </section> */}
            <BannerSlider/>
          </Link>
          <div>
            <CategoryGrid />
          </div>
          <div className="my-16 py-10">

         < Carousel text="Advertised Products"/>
          </div>
            {/* <AdvertisedProducts /> */}
          <FlexDiv>
            <Link to="/search">
              {/* <div className="hover">
                <img src={banners?.[0]?.url} alt="Advertisement 1" />
              </div> */}
            </Link>
            <Link to="/search">
              <div className="hover">
                <img src="https://retailmedia-static.azureedge.net/creativeassets-live/997b319826883b5aa1260b24c8be7336c901183f3d92e8f1d86e89b72ca7b3de.jpg" alt="Advertisement 2" />
              </div>
            </Link>
          </FlexDiv>
          <Link to="/search">
            <div className="firstbanner mb-10">
              <img src="https://www.riteaid.com/content/dam/riteaid-web/campaigns/fy25/home-page-banners/11-10-24-home-page-banners/HomePage_Desktop-Footer.png" alt="Footer Banner" />
            </div>
          </Link>
        </>
      )}
    </MainContainer>
  );
};

export default Homepage;

// Styled Components
const MainContainer = styled.div`
  width: 100%;
  .firstbanner {
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

const AdvertisedProductsContainer = styled.div`
  margin: 30px 0;
  text-align: center;
  font-size: 23px;
  font-weight: 800;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;

  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 10px;
  }

  .hover {
    transition: transform 0.3s ease;
  }

  .hover:hover {
    transform: scale(1.05); /* Zoom effect on hover */
  }
`;
