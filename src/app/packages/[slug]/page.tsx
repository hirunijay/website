import Section1 from "@/components/packageInside/Section1/Section1";
import Section4 from "@/components/packageInside/Section4/Section4";
import DetailSection from "@/components/packageInside/DetailSection/DetailSection";
import FooterSlider from "@/components/packageInside/FooterSlider/FooterSlider";
import FloatButton from "@/components/shared/FloatButton";
import React from "react";

function packageInside() {
  return (
    <div className="mx-0">
      <Section1 />
      <Section4 />
      <DetailSection />
      <FloatButton />
      <div className="bg-black">
        <FooterSlider />
      </div>
    </div>
  );
}

export default packageInside;
