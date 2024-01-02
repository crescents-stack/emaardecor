"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const ProductCarousel = ({ images }: { images: any }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((item: any, index: number) => {
        console.log(item);
        return (
          <SwiperSlide key={index}>
            <div
              className={`${item} bg-cover bg-center min-h-[500px] w-full`}
            ></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
