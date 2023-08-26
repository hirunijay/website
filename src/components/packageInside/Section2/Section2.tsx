import React from "react";
import localFont from "next/font/local";

const kabel = localFont({
  src: "../../../common/assets/fonts/kabel_sv/kabel_bd/KabelBd-Normal.ttf",
  variable: "--font-kabel-bold",
});

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

function Section2() {
  return (
    <div className="my-20 mx-80">
      <div className="flex flex-col">
        <div
          className={`${kabel.variable} font-serif text-6xl tracking-tighter text-[#ddd4c4]`}
        >
          FLY OVER WATER
        </div>
        <div className="flex flex-row my-20">
          <div className="flex-col flex-1 gap-2">
            <ul className="text-xl list-disc">
              <li className="font-bold">Level</li>
              <li className="font-bold">Period</li>
              <li className="font-bold">Group</li>
              <li className="font-bold">
                Food & <br />
                Accomodation
              </li>
              <li className="font-bold">itinerary</li>
            </ul>
          </div>
          <div className="flex-1 text-4xl">
            Join us on an electric Surf Foiling Tour in Mexico. Learn to surf
            with electric foils and discover Mexico's blue lagoon, its
            ecosystem, and the beauty of the area. The perfect combo to get away
            from your daily life, relax and explore the best things Mexico has
            to offer with our local guides and eFoil instructors.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;


 