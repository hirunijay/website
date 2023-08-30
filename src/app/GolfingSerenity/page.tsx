import Section1 from "@/components/GolfingSerenity/Section1/Section1";
import Section2 from "@/components/GolfingSerenity/Section2/Section2";
import Section3 from "@/components/GolfingSerenity/Section3/Section3";
import Section4 from "@/components/GolfingSerenity/Section4/Section4";
import SocialMessage from "@/components/GolfingSerenity/packageSocial/packageSocial";
import DetailSection from "@/components/GolfingSerenity/DetailSection/DetailSection";
import FooterSlider from "@/components/GolfingSerenity/FooterSlider/FooterSlider";
import FloatButton from "@/components/shared/FloatButton";
import React from "react";

function packageInside() {
  return (
    <div className="mx-0">
      <Section1 />
      {/* <Section2 /> */}
      {/* <Section3 /> */}
      <Section4 />
      <DetailSection />
      {/* <SocialMessage /> */}
      <FloatButton />
      <div className="bg-black">
        <FooterSlider />
      </div>
    </div>
  );
}

export default packageInside;
