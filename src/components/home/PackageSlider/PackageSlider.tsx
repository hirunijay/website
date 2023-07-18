import React from "react";
import Image from 'next/image'
import HeroImg from '../../../../src/common/assets/images/homeImg/lift_day0-18.webp'


function PackageSlider() {
  return(
    <div className="flex bg-white gap-7 pl-[30px]">
      
        <div>
        <div className="text-[16px] font-[500]">Get wet</div>
        <div className="text-[48px] font-[400]">summer trips</div>
        <div className="h-[790px] w-[1152px]">
          <div className="relative">
            <div>
              <Image
            src={HeroImg}
            layout="responsive"
            placeholder="blur"
            alt="Picture of the author"
            />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center ">
            <div className="text-[6.4vw] font-[400] leading-[100px]">
              <span className="">Alaia</span><br/>
              <span className="">Mentawai</span>
            </div>
            
            <div className="text-[2vw] font-[400] text-black mt-[19.2px]">Mentawai Island, Indonesia</div>
            </div>
          </div>
          <div className="text-[22px] font-[300] leading-[34.56px] w-[800px] pt-[20px]">
          Far out in the uncharted waters of the south-east Asian islands lies an unregarded beach resort formed by a few boutique bungalows. Its name is Alaia, and it is right next to world-class waves of all sizes. In a few words: paradise is waiting for you.
          </div>
        </div>
        </div>
        <div>
        <div className="text-[16px] font-[500]">Get wet</div>
        <div className="text-[48px] font-[400]">summer trips</div>
        <div className="h-[946.41px] w-[1152px]">
          <div className="relative">
            <div>
              <Image
            src={HeroImg}
            layout="responsive"
            objectFit="cover"
            alt="Picture of the author"
            />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center ">
            <div className="text-[6.4vw] font-[400] leading-[100px]">
              <span className="">Alaia</span><br/>
              <span className="">Mentawai</span>
            </div>
            
            <div className="text-[2vw] font-[400] text-black mt-[19.2px]">Mentawai Island, Indonesia</div>
            </div>
          </div>
          <div className="text-[22px] font-[300] leading-[34.56px] w-[800px] pt-[20px]">
          Far out in the uncharted waters of the south-east Asian islands lies an unregarded beach resort formed by a few boutique bungalows. Its name is Alaia, and it is right next to world-class waves of all sizes. In a few words: paradise is waiting for you.
          </div>
        </div>
        </div>
      
    </div>
  );
}

export default PackageSlider;
