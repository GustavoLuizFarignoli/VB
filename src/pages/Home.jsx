import "../styles/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import futebol from "../image/futebol.jpeg";
import basquete from "../image/basquete.jpeg";
import raquete from "../image/raquete.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Header from "../componets/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={futebol} alt="Logo Billing" className="Image-Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={basquete} alt="Logo Billing" className="Image-Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={raquete} alt="Logo Billing" className="Image-Logo" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
