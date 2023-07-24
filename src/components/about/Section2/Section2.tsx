import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import winterImg from "@/common/assets/images/aboutImages/winter.webp";

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
    <div className="my-40">
      <div className="flex flex-row">
        <div className="flex-col flex-1 mx-20">
          <div className={`text-lg font-sans`}>ABOUT OUR TEAM</div>
          <div
            className={` font-mono text-6xl leading-none font-extrabold tracking-tight`}
          >
            LED BY ADVENTURE
          </div>
          <div className="pt-10 pl-20 text-2xl italic">
            Land of Ride is that thing we'd been searching for ourselves.
          </div>
          <div
            className={`${garamondNarrow.variable} text-2xl mt-12 flex flex-col gap-5 pt-10`}
          >
            <p>
              We are united by our passion for the unseen, the unexplored, the
              unconquered, and enriching journeys.
            </p>
            <p className="indent-10">
              When traveling the world, we always felt that the most amazing
              experiences should be shared.
            </p>
            <p className="indent-10">
              We are skiers, snowboarders, hikers, climbers, bikers, sailors,
              surfers, guides, and we love making people smile. We also want to
              ensure travelers, adventurers, and locals respect the world we
              live in.
            </p>
            <p className="indent-10">
              This is our team - come and explore with us. Welcome to Land of
              Ride.
            </p>
          </div>
        </div>
        <div>
          {" "}
          <Image
            src={winterImg}
            alt={"about-us-image"}
            placeholder="blur"
            height={1527}
            width={1096}
            // fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
