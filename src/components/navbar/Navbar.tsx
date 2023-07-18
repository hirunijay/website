import React from "react";
import Image from "next/image";

import logo from "../../common/assets/images/homeImg/landOfRideLogo.png";

function Navbar() {
  return (
    <div className="flex">
      <div>Adventures</div>
      <div>About Us</div>
      <div></div>
      <div>Community</div>
      <div>Support</div>
    </div>
  );
}

export default Navbar;
