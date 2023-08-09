import React from "react";
import Image from "next/image";
import aboutImage from "../../../common/assets/images/GridImages/image3.webp";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

function Section1() {
  return (
    <div className="mx-20">
      <div className="flex flex-row">
        <div className="flex-col flex-1">
          <div className={`text-lg`}>
            Our <span className="font-bold">STORY</span>
          </div>
          <div
            className={`${kabel.variable} font-serif text-[#ec542d] xl:text-[95.7px] leading-none tracking-tighter`}
          >
            OPENING A<br /> WORLD OF
            <br /> ADVENTURES
          </div>
          <div className={`${garamondNarrow.variable} text-5xl mt-10`}>
            &quot;We travel the world differently. Always in
            <br /> reduced groups of cohesive individuals
            <br /> who have a common understanding of
            <br /> how fun riding waves, mountains, bikes,
            <br /> or anything that can be ridden can be.&quot;{" "}
          </div>
        </div>
        <div>
          {" "}
          <Image
            src={aboutImage}
            alt={"about-us-image"}
            placeholder="blur"
            height={1068}
            width={704}
            //   fill
            className="object-contain shadow-2xl shadow-gray-900"
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
