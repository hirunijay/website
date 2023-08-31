import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

interface DetailSectionProps {
  content: any;
}

function DetailSection({ content }: DetailSectionProps) {
  return (
    <div className="my-40">
      <div className="md:grid md:grid-cols-2 xl:h-900px] md:h-[900px]">
        <div className="h-full overflow-hidden">
          {" "}
          <Image
            src={content.detailImage}
            alt={"about-us-image"}
            placeholder="blur"
            // width={"50%"}
            // height={"80%"}
            className="object-cover object-bottom"
            style={{ objectPosition: "bottom" }}
          />
        </div>
        <div className="grid flex-1 gap-8 mx-10 max-h-[900px] overflow-auto scrollbar-none">
          {/* <div className={`${garamondNarrow.variable} text-xl flex pt-3`}><p>{headerContent.content}</p></div> */}
          {content.detailContent.map((item: any, index: number) => (
            <div className="flex flex-col" key={index}>
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
          <div className={`${garamondNarrow.variable} text-xl flex pt-3`}>
            <p>{content.footerContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
