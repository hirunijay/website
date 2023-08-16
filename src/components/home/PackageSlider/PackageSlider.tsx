"use client";
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
//assests
import pkg1 from "@/common/assets/images/packageSlider/surfgirl.webp";
import pkg2 from "@/common/assets/images/packageSlider/ocean.webp";
import dynamic from "next/dynamic";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

const sliderContent = [
  {
    image: pkg1,
    title: (
      <>
        ALAIA
        <br />
        MENTAWAI
      </>
    ),
    subtitle: "Mentawai Island, Indonesia",
    description:
      "Far out in the uncharted waters of the south-east Asian islands lies an unregarded beach resort formed by a few boutique bungalows. Its name is Alaia, and it is right next to world-class waves of all sizes. In a few words: paradise is waiting for you.",
  },
  {
    image: pkg2,
    title: (
      <>
        LEARN
        <br /> EFOIL
        <br /> SURF
      </>
    ),
    subtitle: "Bacala, Mexico",
    description:
      "Come join us on a Surf Foiling Tour in Mexico. Learn to surf foil with electric foils and discover Mexico's blue lagoon, its ecosystem, and the beauty of the area. The perfect combo to get away from your daily life, relax and explore the best things Mexico has to offer with our local guides!",
  },
];

function PackageSlider() {
  return (
    <div className="mx-0 ">
      <div className="py-12 md:py-20">
        <div className="flex flex-col justify-center gap-3 px-10 mb-10 md:mb-20 md:px-20">
          <div className="text-base font-semibold md:text-lg">GET WET</div>
          <div
            className={`${kabel.variable} font-serif font-bold text-black md:text-6xl text-4xl leading-none tracking-tighter`}
          >
            SUMMER TRIPS
          </div>
        </div>
        <Swiper
          slidesPerView="auto"
          className="packageSlider"
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={0}
          freeMode={true}
          // loop={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: "auto",
            },
          }}
        >
          {sliderContent.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex flex-col items-center justify-center">
                <div className="flex 2xl:h-[790px] xl:h-[600px] h-96">
                  <Image
                    src={item.image}
                    alt="package one"
                    height={790}
                    width={1113}
                    className="object-cover overflow-hidden"
                  />
                </div>
                <div className="absolute flex flex-col gap-5 text-center">
                  <div
                    className={`${kabel.variable} font-serif font-bold text-white lg:text-8xl text-4xl leading-none tracking-tighter`}
                  >
                    {item.title}
                  </div>
                  <div className="lg:text-5xl text-2xl font-[400] text-black">
                    {item.subtitle}
                  </div>
                </div>
                <div className="flex md:h-20 h-24 lg:text-lg text-sm text-black pt-[20px] text-center md:text-left">
                  {item.description}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PackageSlider;
