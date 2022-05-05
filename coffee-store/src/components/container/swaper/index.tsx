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
        <SwiperSlide><Image src="https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2NH-G%C3%81I-%C4%90%E1%BA%B8P.jpg" style={{}} preview={false}/></SwiperSlide>
        <SwiperSlide><Image src="https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2NH-G%C3%81I-%C4%90%E1%BA%B8P.jpg" style={{}} preview={false}/></SwiperSlide>
        <SwiperSlide><Image src="https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2NH-G%C3%81I-%C4%90%E1%BA%B8P.jpg" style={{}} preview={false}/></SwiperSlide>
        <SwiperSlide><Image src="https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2NH-G%C3%81I-%C4%90%E1%BA%B8P.jpg" style={{}} preview={false}/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Swaper