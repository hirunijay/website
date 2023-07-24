import React from "react";
import GridItem from "./adventureGrid";

//images
import Img1 from "../../common/assets/images/GridImages/image1.webp";
import Img2 from "../../common/assets/images/GridImages/image2.webp";
import Img3 from "../../common/assets/images/GridImages/image3.webp";
import Img4 from "../../common/assets/images/GridImages/image4.webp";
import Img5 from "../../common/assets/images/GridImages/image5.webp";
import Img6 from "../../common/assets/images/GridImages/image6.webp";

function GridSection() {
  return (
    <div className="mx-0">
      <div className="w-full py-24">
        <div className="grid grid-cols-3 gap-5 grid-rows-9">
          <div className="col-start-2 row-span-4 shadow-lg">
            <GridItem
              title="SURF GOLF RETREAT"
              subtitle="Silver Coast, Portugal"
              titleFontStyle=""
              subtitleFontStyle=""
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img1}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
          <div className="row-span-4 row-start-2 shadow-lg">
            <GridItem
              title="LEARN EFOIL SURF"
              subtitle="Bacala, Mexico"
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img2}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
          <div className="col-start-3 row-span-4 row-start-2 shadow-lg">
            <GridItem
              title="SANDS OF GOBI"
              subtitle="Gobi Deseart, Mongolia"
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img3}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
          <div className="col-start-2 row-span-4 row-start-5 shadow-lg">
            <GridItem
              title="MID SUMMER GOLF CLUB"
              subtitle="Ahus Sweden"
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img4}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
          <div className="col-start-3 row-span-4 row-start-6 shadow-lg">
            <GridItem
              title="EL CAMINO E-BIKE"
              subtitle="Galicia Span"
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img5}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
          <div className="col-start-1 row-span-4 row-start-6 shadow-lg">
            <GridItem
              title="PARA MOTOR SAFARI"
              subtitle="Skeleton Bay, Namibia"
              subtitleTextSize=""
              descLineHeight=""
              descFontWeight=""
              // descFontSize=""
              description="Starting from $1.800"
              actions=""
              backgroundImage={Img6}
              titleTextColour=""
              descriptionTextColour="white"
              // height="h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridSection;
