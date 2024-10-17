"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swipper.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Swipper() {
  return (
    <div className='swipper-container'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/swipper1img.jpg" alt=""  />
        </SwiperSlide>
        <SwiperSlide><img src="/images/swipper2img.jpg" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="/images/swipper3img.jpg" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="/images/swipper4img.jpg" alt=""  /></SwiperSlide>
      </Swiper>
    </div>
  );
}


export default Swipper