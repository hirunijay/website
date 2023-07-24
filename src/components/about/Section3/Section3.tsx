import React from "react";
import Image from "next/image";

import Img1 from "@/common/assets/images/aboutImages/about2.webp";
import Img2 from "@/common/assets/images/aboutImages/about3.webp";

function Section3() {
  return (
    <div className="mx-20 my-40">
      <div className="grid justify-center h-full grid-cols-2 grid-rows-3 gap-4 overflow-hidden grid_card">
        <div className="row-span-3 h-[1012px]">
          <Image
            src={Img1}
            alt={"motorcycle image"}
            placeholder="blur"
            width={880}
            height={1012}
            // className="object-cover"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="row-span-2">
          <Image
            src={Img2}
            alt={"paragliding"}
            placeholder="blur"
            width={538}
            height={792}
            className="object-cover"
          />
        </div>
        <div className="col-start-2 row-start-3">
          <div className="flex flex-col">
            <div>OUR TEAM ON A RIDE</div>
            <div>
              &quot;Land of Ride is something we ourselves had been searching
              for.Land of Ride is something we ourselves had been searching
              for.&quot;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
