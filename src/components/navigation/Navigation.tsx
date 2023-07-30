"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./navbar/Navbar";
import MobileNavbar from "./navbar/MobileNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "@/common/assets/images/homeImg/Final-Logo.png";

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    console.log(isOpen);
  };
  return (
    <nav className="sticky top-0 z-50">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="flex flex-row items-center bg-white border-b border-slate-200 navbar h-14 lg:hidden">
        <Link
          href={"/"}
          className="flex-1 flex justify-start h-full items-center"
        >
          <div className="h-[25px] w-[125px] flex items-center">
            <Image
              src={logo}
              alt="main_logo"
              placeholder="blur"
              className="object-contain w-auto p-2"
            />
          </div>
        </Link>
        <div className="flex-1 flex justify-end">
          <GiHamburgerMenu size={30} onClick={toggleDrawer} />
        </div>
        <MobileNavbar isOpen={isOpen} toggleDrawer={toggleDrawer} />
      </div>
    </nav>
  );
}

export default Navigation;
