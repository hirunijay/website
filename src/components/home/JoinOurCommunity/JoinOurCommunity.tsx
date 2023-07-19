import React from "react";
import localFont from "@next/font/local";

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

function JoinOurCommunity() {
  return (
    <div className={`text-center`}>
      <div className="text-[#ec542d] pt-20 font-[800] leading-[20px] font-mono text-3xl">
        JOIN OUR COMMUNITY
      </div>
      <div className={`${garamondNarrow.variable} font-sans text-black pt-7`}>
        <span className="text-[80px] font-[400] leading-[80px]">
          Get the only
        </span>
        <br />
        <span className="text-[80px] font-[400] leading-[80px]">
          Newsletter
        </span>
        <span className="text-[80px] font-[300] leading-[80px] italic">
          {" "}
          worth
          <br />
          riding
        </span>
      </div>
      <div>
        <div className="flex justify-center mt-16">
          <input
            type="email"
            placeholder="Your email address"
            className="border-t-0 border-b border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-2 py-2 text-red-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 pl-[0px] border-b border-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current text-red-500 w-[11px] h-[11px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinOurCommunity;
