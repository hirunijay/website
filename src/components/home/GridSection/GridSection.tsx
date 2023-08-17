"use client";
import React from "react";
import GridItem from "./GridItem";
import { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";

//images
import Img1 from "../../../common/assets/images/GridImages/image1.webp";
import Img2 from "../../../common/assets/images/GridImages/image2.webp";
import Img3 from "../../../common/assets/images/GridImages/image3.webp";
import Img4 from "../../../common/assets/images/GridImages/image4.webp";
import Img5 from "../../../common/assets/images/GridImages/image5.webp";
import Img6 from "../../../common/assets/images/GridImages/image6.webp";

const packageContent = [
  {
    image: Img1,
    title: (
      <>
        ALAIA
        <br />
        MENTAWAI
      </>
    ),
    subtitle: "Mentawai Island, Indonesia",
  },
  {
    image: Img2,
    title: (
      <>
        LEARN
        <br /> EFOIL
        <br /> SURF
      </>
    ),
    subtitle: "Bacala, Mexico",
  },
  {
    image: Img3,
    title: (
      <>
        LEARN
        <br /> EFOIL
        <br /> SURF
      </>
    ),
    subtitle: "Bacala, Mexico",
  },
  {
    image: Img4,
    title: (
      <>
        LEARN
        <br /> EFOIL
        <br /> SURF
      </>
    ),
    subtitle: "Bacala, Mexico",
  },
  {
    image: Img5,
    title: (
      <>
        LEARN
        <br /> EFOIL
        <br /> SURF
      </>
    ),
    subtitle: "Bacala, Mexico",
  },
];

function GridSection() {
  return (
    <div className="mx-0">
      <div className="w-full py-20 lg:py-60">
        <div className="hidden grid-cols-3 grid-rows-2 gap-6 lg:grid">
          <div className="shadow-lg ">
            <GridItem
              title="SURF GOLF RETREAT"
              subtitle="Silver Coast, Portugal"
              titleFontStyle=""
              subtitleFontStyle=""
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img1}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
          <div className="shadow-lg column_two">
            <GridItem
              title="LEARN EFOIL SURF"
              subtitle="Bacala, Mexico"
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img2}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
          <div className="shadow-lg">
            <GridItem
              title="SANDS OF GOBI"
              subtitle="Gobi Deseart, Mongolia"
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img3}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
          <div className="shadow-lg">
            <GridItem
              title="MID SUMMER GOLF CLUB"
              subtitle="Ahus Sweden"
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img4}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
          <div className="shadow-lg column_two">
            <GridItem
              title="EL CAMINO E-BIKE"
              subtitle="Galicia Span"
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img5}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
          <div className="shadow-lg">
            <GridItem
              title="PARA MOTOR SAFARI"
              subtitle="Skeleton Bay, Namibia"
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img6}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
        </div>

        <div className="lg:hidden">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="grid-swiper"
            loop={true}
          >
            {packageContent.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col items-center justify-center">
                  <div className="flex sm:h-[700px] h-[500px] w-[80%] rounded-[23px]">
                    <Image
                      src={item.image}
                      alt="package one"
                      height={790}
                      width={1113}
                      className="object-cover overflow-hidden rounded-[23px]"
                    />
                  </div>
                  <div className="absolute flex flex-col gap-5 text-center">
                    <div
                      className={`font-serif font-bold text-white text-4xl leading-none tracking-tighter`}
                    >
                      {item.title}
                    </div>
                    <div className="text-2xl font-[400] text-black">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default GridSection;
