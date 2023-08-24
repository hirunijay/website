import React from "react";
import localFont from "next/font/local";
import detailImage from "@/common/assets/images/innerPageImage/packageInside.webp";
import Image from "next/image";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

const detailsContent = [
  {
    title: "Day 01 - Arrival in colombo, where the dreams begin",
    description:
      "Step onto the beaches of Mexico with your sea foil and discover a whole new world. This tour is designed for those who want to learn to surf foil or would like to improve their skills and get away from it all.",
  },
  {
    title: "Day 01 - Arrival in colombo, where the dreams begin",
    description:
      "Step onto the beaches of Mexico with your sea foil and discover a whole new world. This tour is designed for those who want to learn to surf foil or would like to improve their skills and get away from it all.",
  },
  {
    title: "Day 01 - Arrival in colombo, where the dreams begin",
    description:
      "Step onto the beaches of Mexico with your sea foil and discover a whole new world. This tour is designed for those who want to learn to surf foil or would like to improve their skills and get away from it all.",
  },
  {
    title: "Day 01 - Arrival in colombo, where the dreams begin",
    description:
      "Step onto the beaches of Mexico with your sea foil and discover a whole new world. This tour is designed for those who want to learn to surf foil or would like to improve their skills and get away from it all.",
  },
  {
    title: "Day 01 - Arrival in colombo, where the dreams begin",
    description:
      "Step onto the beaches of Mexico with your sea foil and discover a whole new world. This tour is designed for those who want to learn to surf foil or would like to improve their skills and get away from it all.",
  },
  {
    title: "Day 01 - Arrival in colombo, where the dreams begin",
    description:
      "Step onto the beaches of Mexico with your sea foil and discover a whole new world. This tour is designed for those who want to learn to surf foil or would like to improve their skills and get away from it all.",
  },
  {
    title: "Day 01 - Arrival in colombo, where the dreams begin",
    description:
      "Step onto the beaches of Mexico with your sea foil and discover a whole new world. This tour is designed for those who want to learn to surf foil or would like to improve their skills and get away from it all.",
  },
  {
    title: "Day 01 - Arrival in colombo, where the dreams begin",
    description:
      "Step onto the beaches of Mexico with your sea foil and discover a whole new world. This tour is designed for those who want to learn to surf foil or would like to improve their skills and get away from it all.",
  },
];

function DetailSection() {
  return (
    <div className="my-40">
      <div className="grid grid-cols-2 h-[600px]">
        <div className="h-full overflow-hidden">
          {" "}
          <Image
            src={detailImage}
            alt={"about-us-image"}
            placeholder="blur"
            // width={"50%"}
            // height={"80%"}
            className="object-cover object-bottom"
            style={{ objectPosition: "bottom" }}
          />
        </div>
        <div className="grid flex-1 gap-8 mx-10 max-h-[600px] overflow-auto scrollbar-none">
          {detailsContent.map((item, index) => (
            <div className="flex flex-col">
              <div
                className={`${kabel.variable} font-serif text-xl tracking-tighter text-[#ddd4c4]`}
              >
                {item.title}
              </div>
              <hr className="mt-3" />
              <div className={`${garamondNarrow.variable} text-xl flex pt-3`}>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
