import React from "react";
import Image from "next/image";
import GridItem from "@/components/home/GridSection/GridItem";

import Img1 from "@/common/assets/images/aboutImages/about2.webp";
import Img2 from "@/common/assets/images/aboutImages/about3.webp";

function Section3() {
  return (
    <div className="mx-20 my-40">
      <div className="w-full py-10">
        <div className="grid grid-cols-2 grid-rows-6 gap-20">
          <div className="row-span-6">
            <GridItem
              title=""
              subtitle=""
              titleFontStyle=""
              subtitleFontStyle=""
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description=""
              actions=""
              backgroundImage={Img1}
              titleTextColour=""
              descriptionTextColour=""
              height="h-[1362px]"
              
            />
          </div>
          <div className="row-span-5 ">
            <GridItem
              title=""
              subtitle=""
              titleFontStyle=""
              subtitleFontStyle=""
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              description=""
              actions=""
              backgroundImage={Img2}
              titleTextColour=""
              descriptionTextColour=""
              height="h-[792px]"
            />
          </div>
          <div className="row-span-1 col-start-2 row-start-6">
            <div className="flex flex-col gap-5">
              <div className="text-lg font-bold font-sans">
                OUR TEAM ON A RIDE
              </div>
              <div className="font-sans italic text-2xl font-medium">
                &quot;Land of Ride is
                <br /> something we ourselves had
                <br /> been searching for.&quot;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
