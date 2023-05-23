import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logo1 from '../../assets/image/slider/1.jpg'
import logo2 from '../../assets/image/slider/2.jpg'
import logo3 from '../../assets/image/slider/3.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled"
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={logo1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo3} alt="" /></SwiperSlide>  
      </Swiper>
    </>
  );
}
