import React from "react";
import Image from "next/image";
import HeroImg from "../../../../src/common/assets/images/homeImg/lift_day0-18.webp";

const data = [
  {
    id: 1,
    img: HeroImg,
    alt: "lift day0-18",
    title1: "Alaia",
    title2: "Mentawai",
    address: "Mentawai Island, Indonesia",
    desc: "Far out in the uncharted waters of the south-east Asian islands lies an unregarded beach resort formed by a few boutique bungalows. Its name is Alaia, and it is right next to world-class waves of all sizes. In a few words: paradise is waiting for you.",
  },
  {
    id: 2,
    img: HeroImg,
    alt: "lift day0-18",
    title1: "Alaia",
    title2: "Mentawai",
    address: "Mentawai Island, Indonesia",
    desc: "Far out in the uncharted waters of the south-east Asian islands lies an unregarded beach resort formed by a few boutique bungalows. Its name is Alaia, and it is right next to world-class waves of all sizes. In a few words: paradise is waiting for you.",
  },
  {
    id: 3,
    img: HeroImg,
    alt: "lift day0-18",
    title1: "Alaia",
    title2: "Mentawai",
    address: "Mentawai Island, Indonesia",
    desc: "Far out in the uncharted waters of the south-east Asian islands lies an unregarded beach resort formed by a few boutique bungalows. Its name is Alaia, and it is right next to world-class waves of all sizes. In a few words: paradise is waiting for you.",
  },
  {
    id: 4,
    img: HeroImg,
    alt: "lift day0-18",
    title1: "Alaia",
    title2: "Mentawai",
    address: "Mentawai Island, Indonesia",
    desc: "Far out in the uncharted waters of the south-east Asian islands lies an unregarded beach resort formed by a few boutique bungalows. Its name is Alaia, and it is right next to world-class waves of all sizes. In a few words: paradise is waiting for you.",
  },
  {
    id: 5,
    img: HeroImg,
    alt: "lift day0-18",
    title1: "Alaia",
    title2: "Mentawai",
    address: "Mentawai Island, Indonesia",
    desc: "Far out in the uncharted waters of the south-east Asian islands lies an unregarded beach resort formed by a few boutique bungalows. Its name is Alaia, and it is right next to world-class waves of all sizes. In a few words: paradise is waiting for you.",
  },
  {
    id: 6,
    img: HeroImg,
    alt: "lift day0-18",
    title1: "Alaia",
    title2: "Mentawai",
    address: "Mentawai Island, Indonesia",
    desc: "Far out in the uncharted waters of the south-east Asian islands lies an unregarded beach resort formed by a few boutique bungalows. Its name is Alaia, and it is right next to world-class waves of all sizes. In a few words: paradise is waiting for you.",
  },
  {
    id: 7,
    img: HeroImg,
    alt: "lift day0-18",
    title1: "Alaia",
    title2: "Mentawai",
    address: "Mentawai Island, Indonesia",
    desc: "Far out in the uncharted waters of the south-east Asian islands lies an unregarded beach resort formed by a few boutique bungalows. Its name is Alaia, and it is right next to world-class waves of all sizes. In a few words: paradise is waiting for you.",
  },
  {
    id: 8,
    img: HeroImg,
    alt: "lift day0-18",
    title1: "Alaia",
    title2: "Mentawai",
    address: "Mentawai Island, Indonesia",
    desc: "Far out in the uncharted waters of the south-east Asian islands lies an unregarded beach resort formed by a few boutique bungalows. Its name is Alaia, and it is right next to world-class waves of all sizes. In a few words: paradise is waiting for you.",
  },
];

function PackageSlider() {
  return (
    <div className="flex bg-white gap-7 pl-[30px]">
      <div>
        <div className="text-[16px] font-[500]">Get wet</div>
        <div className="text-[48px] font-[400]">summer trips</div>
        {data.map((data) => {
          return (
            <div className="h-[790px] w-[1152px]">
              
              <div className="relative">
                <div className="">
                  <Image
                    src={data.img}
                    layout="responsive"
                    placeholder="blur"
                    alt="Picture of the author"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center ">
                  <div className="text-[6.4vw] font-[400] leading-[100px]">
                    <span className="">{data.title1}</span>
                    <br />
                    <span className="">{data.title2}</span>
                  </div>

                  <div className="text-[2vw] font-[400] text-black mt-[19.2px]">
                    {data.address}
                  </div>
                </div>
              </div>
              <div className="text-[22px] font-[300] leading-[34.56px] w-[800px] pt-[20px]">
                {data.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PackageSlider;
