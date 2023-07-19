import React from "react";
import Image from "next/image";
import HeroImg from "../../../../src/common/assets/images/homeImg/lift_day0-18.webp";
import localFont from "next/font/local";

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
    <div className="relative">
      <div className="overflow-hidden h-[900px] 2xl:w-full flex justify-center items-center">
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
          className={`text-3xl mb-4 xl:leading-[110px] ${kabel.variable} font-serif`}
        >
          <span className="text-[6.4vw] font-[400]">LEARN</span>
          <br />
          <span className="text-[10.66vw] font-[400]">EFOIL</span>
          <br />
          <span className="text-[10.66vw] font-[400]">SURF</span>
          <br />
        </div>
        <div className="text-[2vw] font-[400] text-black">Bacalar, Mexico</div>
      </div>
    </div>
  );
}

export default HeroSection;
