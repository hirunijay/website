"use client";
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
//assests
import pkg1 from "@/common/assets/images/packageSlider/surfgirl.webp";
import pkg2 from "@/common/assets/images/packageSlider/ocean.webp";

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
    <div className="mx-0">
      <div className="py-20">
        <div className="flex flex-col gap-3 px-20 mb-20">
          <div className="text-lg font-semibold">GET WET</div>
          <div
            className={`${kabel.variable} font-serif font-bold text-black text-6xl leading-none tracking-tighter`}
          >
            SUMMER TRIPS
          </div>
        </div>
        <Swiper
          slidesPerView="auto"
          className="packageSlider"
          navigation={true}
          modules={[Navigation]}
          spaceBetween={0}
          freeMode={true}
          // loop={true}
        >
          {sliderContent.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex flex-col items-center justify-center w-[1113px]">
                <div className="flex h-[790px] w-[1113px]">
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
                    className={`${kabel.variable} font-serif font-bold text-white text-8xl leading-none tracking-tighter`}
                  >
                    {item.title}
                  </div>
                  <div className="text-5xl font-[400] text-black">
                    {item.subtitle}
                  </div>
                </div>
                <div className="flex h-20 text-lg text-black">
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
