import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

interface Section4Props {
  content: any;
}

function Section4({ content }: Section4Props) {
  return (
    <div className="my-20">
      <div className="flex flex-col gap-10">
        <div className="flex-col justify-center mx-20">
          {/* <div
            className={`${kabel.variable} font-serif text-6xl tracking-tighter text-[#ddd4c4]`}
          >
            LEARN TO FLY
          </div>
          <div className="pt-20 pl-20 text-2xl italic">On water.</div> */}
          <div
            className={`${garamondNarrow.variable} text-2xl flex flex-col gap-5 justify-center`}
          >
            <p className="text-center">{content.description}</p>
          </div>
        </div>
        <div className="h-[500px] w-[80%] overflow-hidden flex mx-auto drop-shadow-xl">
          {" "}
          <Image
            src={content.desImage}
            alt={"about-us-image"}
            placeholder="blur"
            // height={712}
            // width={1140}
            // fill
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default Section4;
