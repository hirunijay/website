import React from "react";
import Image from 'next/image'
import HeroImg from '../../../../src/common/assets/images/homeImg/lift_day0-18.webp'

function HeroSection() {
  return (
    <div className="relative">
      <div className="w-full h-auto">
        <Image
          src={HeroImg}
          layout="responsive"
          objectFit="cover"
          alt="Picture of the author"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="text-3xl mb-4">
          LEARN EFOIL SURF
        </div>
        <div className="text-2xl">
          Bacalar, Mexico
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
