"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

interface Section1Props {
  content: any;
}

function Section1({ content }: Section1Props) {
  return (
    <div className="relative">
      <div className="flex items-center justify-center overflow-hidden lg:h-[800px] h-96">
        <div className="h-full w-full absolute z-[-1]">
          <Image
            src={content.heroImg}
            alt="Picture of the author"
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center text-center text-white pt-[10%]">
        <div
          className={`text-3xl mb-4 xl:leading-[110px] ${kabel.variable} font-serif tracking-tight`}
        >
          <div className="text-[6.4vw] font-[400]">{content.title}</div>
        </div>
        <div className="text-[2vw] font-[400] text-black">
          {content.subtitle}
        </div>
      </div>
    </div>
  );
}

export default Section1;
