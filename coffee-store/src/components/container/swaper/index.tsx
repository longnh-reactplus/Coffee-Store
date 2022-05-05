import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Image } from 'antd';

function Swaper() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><Image src="https://file.hstatic.net/1000075078/file/web_desktop_44bc61f0c6a644aba56f4613fdd48f70.jpg" style={{}} preview={false}/></SwiperSlide>
        <SwiperSlide><Image src="https://file.hstatic.net/1000075078/file/desktop_da8b79834e1245efabac584665a2a253.jpg" style={{}} preview={false}/></SwiperSlide>
        <SwiperSlide><Image src="https://file.hstatic.net/1000075078/file/web_moi_desktop_fc5c66b5483249e783ccef0dd6a38ac8.jpg" style={{}} preview={false}/></SwiperSlide>
        <SwiperSlide><Image src="https://file.hstatic.net/1000075078/file/desktop_a33136ed348e4fb8b0c7fba0c4813795.jpg" style={{}} preview={false}/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Swaper