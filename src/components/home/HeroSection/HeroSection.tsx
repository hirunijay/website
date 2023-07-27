import React from "react";
import Image from "next/image";
import HeroImg from "../../../../src/common/assets/images/homeImg/lift_day0-18.webp";
import localFont from "next/font/local";
import 'animate.css';

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

function HeroSection() {
  return (
    <div className="relative mt-20 ">
      <div className="overflow-hidden h-[900px] 2xl:w-full flex justify-center items-center animate__animated animate__fadeInDown">
        <div className="h-full w-full absolute z-[-1]">
          <Image
            src={HeroImg}
            alt="Picture of the author"
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <div
          className={`text-3xl mb-4 xl:leading-[110px] ${kabel.variable} font-serif tracking-tight `}
        >
          <div className="text-[6.4vw] font-[400] animate__animated animate__backInUp animate__delay-0.4s">LEARN</div>
          <br />
          <div className="text-[10.66vw] font-[400] animate__animated animate__backInLeft animate__delay-0.6s">EFOIL</div>
          <br />
          <div className="text-[10.66vw] font-[400] animate__animated animate__backInRight animate__delay-0.8s">SURF</div>
          <br />
        </div>
        <div className="text-[2vw] font-[400] text-black animate__animated animate__fadeInUpBig animate__delay-0.8s">Bacalar, Mexico</div>
      </div>
    </div>
  );
}

export default HeroSection;
