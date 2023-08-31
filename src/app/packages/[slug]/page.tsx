"use client";
import React from "react";
import Section1 from "@/components/packageInside/Section1/Section1";
import Section4 from "@/components/packageInside/Section4/Section4";
import DetailSection from "@/components/packageInside/DetailSection/DetailSection";
import FooterSlider from "@/components/packageInside/FooterSlider/FooterSlider";
import FloatButton from "@/components/shared/FloatButton";
import { packageData } from "../data";
import { usePathname } from "next/navigation";

function PackageInside() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const slug = pathSegments[pathSegments.length - 1];

  interface PackageDetails {
    section1: {};
    section4: {};
    detailSection: {};
    notFound?: string;
  }

  let packageDetails: PackageDetails | null = null;

  switch (slug) {
    case "GolfingSerenity":
      packageDetails = packageData.GolfingSerenity;
      break;
    case "Windswept":
      packageDetails = packageData.Windswept;
      break;
    default:
      packageDetails = {
        section1: {},
        section4: {},
        detailSection: {},
        notFound: "404",
      };
      break;
  }

  return (
    <div className="mx-0">
      {packageDetails?.notFound ? (
        <div className="bg-gray-50 h-[100vh] text-black flex justify-center items-center text-xl font-medium">
          404 | This page could not be found.
        </div>
      ) : (
        <>
          <Section1 content={packageDetails.section1} />
          <Section4 />
          <DetailSection />
          <FloatButton />
          <div className="bg-black">
            <FooterSlider />
          </div>
        </>
      )}
    </div>
  );
}

export default PackageInside;
