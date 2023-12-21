"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    //   pagination={{
    //     clickable: true,
    //   }}
    //   navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className={`bg-[url('/images/home/image1.webp')] bg-cover bg-center min-h-[85vh] w-full`}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`bg-[url('/images/home/image1.webp')] bg-cover bg-center min-h-[85vh] w-full`}
        ></div>
      </SwiperSlide>
    </Swiper>
  );
};
