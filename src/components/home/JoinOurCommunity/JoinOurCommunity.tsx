"use client";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import AOS from 'aos';
import 'aos/dist/aos.css';

const garamondNarrow = localFont({
  src: "../../../common/assets/fonts/garamond-condensed-regular_a2s7r/GaramondCondensedRegular.ttf",
  variable: "--font-garamond-narrow-regular",
});

function JoinOurCommunity() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      // ... (other configuration settings)
    });
  }, []);

  return (
    <div className={`text-center`}>
      <div data-aos="fade-up" className="text-[#ec542d] pt-20 font-[800] leading-[20px] font-mono text-3xl text-shadow">
        JOIN OUR COMMUNITY
      </div>
      <div  className={`${garamondNarrow.variable} font-sans text-black pt-7`}>
        <div data-aos="fade-right" className="text-[80px] font-[400] leading-[80px] text-shadow">
          Get the only
        </div>
        <br />
        <div data-aos="fade-left">
        <span  className="text-[80px] font-[400] leading-[80px] text-shadow">
          Newsletter&nbsp;
        </span>
        <span className="text-[80px] font-[300] leading-[80px] italic text-shadow">
          worth
        </span>
        </div>
        <div data-aos="fade-right" className="text-[80px] font-[300] leading-[80px] italic text-shadow"><span>riding</span></div>
        
      </div>
      <div>
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="flex justify-center mt-16">
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
