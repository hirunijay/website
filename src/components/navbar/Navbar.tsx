import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Libre_Franklin } from "next/font/google";

import logo from "../../common/assets/images/homeImg/Final-Logo.png";

const franklin_font = Libre_Franklin({ subsets: ["latin"] });

const leftMenu = [
  { title: "Adventures", path: "/adventure" },
  { title: "About Us", path: "/about" },
];

const rightMenu = [
  { title: "Community", path: "/" },
  { title: "Support", path: "/" },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex flex-row items-center justify-between bg-white border-b border-slate-200 navbar h-14">
      <div className="flex flex-row font-sans">
        {leftMenu.map((item, index) => (
          <Link
            href={item.path}
            className="flex items-center justify-center w-[150px] h-14 hover:bg-gray-100"
          >
            <div
              key={index}
              className="flex text-base text-black justify-center items-center h-8 w-[150px] border-r border-slate-200"
            >
              {item.title}
            </div>
          </Link>
        ))}
      </div>
      <div className="h-[25px] w-[125px] flex items-center">
      <Image
        src={logo}
        alt="main_logo"
        placeholder="blur"
        className="object-contain w-auto p-2"
      />
      </div>
      
      <div className="flex flex-row font-sans">
        {rightMenu.map((item, index) => (
          <Link
            href={item.path}
            className="flex items-center justify-center w-[150px] h-14 hover:bg-gray-100"
          >
            <div
              key={index}
              className="flex text-base text-black justify-center items-center h-8 w-[150px] border-l border-slate-200 "
            >
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
