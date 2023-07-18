import React from "react";
import Image from 'next/image'
import HeroImg from '../../../../src/common/assets/images/homeImg/lift_day0-18.webp'

function HeroSection() {
  return (
    <div className="relative">
      <div className=" overflow-hidden">
        <Image
          src={HeroImg}
          alt="Picture of the author"
          height={1317}
          width={1920}
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <div className="text-3xl mb-4 xl:leading-[110px]">
          <span className="text-[6.4vw] font-[400]">LEARN</span><br/>
          <span className="text-[10.66vw] font-[400]">EFOIL</span><br/>
          <span className="text-[10.66vw] font-[400]">SURF</span><br/>
        </div>
        <div className="text-[2vw] font-[400] text-black">
          Bacalar, Mexico
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
