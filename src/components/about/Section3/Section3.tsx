import React from "react";
import Image from "next/image";

import Img1 from "@/common/assets/images/aboutImages/about2.webp";
import Img2 from "@/common/assets/images/aboutImages/about3.webp";

function Section3() {
  return (
    <div className="mx-20 my-40">
      <div className="grid grid-cols-2 grid-rows-6 gap-4 overflow-hidden grid_card">
        <div className="row-span-6">
          <Image
            src={Img1}
            alt={"motorcycle image"}
            placeholder="blur"
            width={1183.29}
            height={1361.09}
            // className="object-cover"
            layout="responsive"
            // style={{ objectFit: "cover" }}
          />
        </div>
        <div className="row-span-4">
          <Image
            src={Img2}
            alt={"paragliding"}
            placeholder="blur"
            width={538}
            height={792}
            className="object-cover"
          />
        </div>
        <div className="row-span-2 col-start-2 row-start-5">
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
