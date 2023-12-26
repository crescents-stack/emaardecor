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
      {images.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div
              className={`${item.image} bg-cover bg-center min-h-[85vh] w-full`}
            ></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const images = [
  {
    id: 1,
    image: "bg-[url('/images/home/image1.webp')]",
  },
  {
    id: 2,
    image: "bg-[url('/images/home/image2.jpeg')]",
  },
  {
    id: 3,
    image: "bg-[url('/images/home/image3.jpg')]",
  },
  {
    id: 4,
    image: "bg-[url('/images/home/image4.jpg')]",
  },
];
