import React from "react";
import Image from "next/image";

import Img1 from "@/common/assets/images/aboutImages/about2.webp";
import Img2 from "@/common/assets/images/aboutImages/about3.webp";

function Section3() {
  return (
    <div className="my-40">
      <div className="grid grid-cols-2 grid-rows-3 gap-4">
        <div className="row-span-3">
          <Image
            src={Img1}
            alt={"motorcycle image"}
            placeholder="blur"
            fill
            className="object-fit"
          />
        </div>
        <div className="row-span-2">
          <Image
            src={Img2}
            alt={"paragliding"}
            placeholder="blur"
            fill
            className="object-fit"
          />
        </div>
        <div className="col-start-2 row-start-3">
          <div className="flex flex-col">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
