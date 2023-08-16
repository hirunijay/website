import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white md:h-[800px] flex flex-col w-full">
      <div className="container mx-auto">
        <div className="pt-[150px]">
          <hr />
        </div>
        <div className="flex md:flex-row flex-col gap-16 md:gap-0 md:pt-[150px] pt-20 px-5 md:px-0 justify-between">
          <div className="flex flex-row">
            <div className="md:text-[24px] text-xl font-[300]">
              <div>About Us</div>
              <div>Community</div>
              <div>Help center</div>
              <div>Booking & cancellation</div>
              <div>How it works</div>
            </div>
            <div className="ml-auto lg:hidden">
              <button className="flex items-center justify-center py-1 origin-center -rotate-90 rounded-full appearance-none focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current text-[#EBB70B] w-[28px] h-[28px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="text-center ml-auto mr-auto 2xl:w-[420px] md:pl-[5%]">
            <div className="md:pb-[38.4px] pb-5 font-bold text-[30px] text-[#EBB70B] font-mono">
              WEEKLY AND FREE
            </div>
            <div className="md:pb-[57.6px] pb-10">
              The only Newsletter worth riding. Carefully designed for young
              business professionals and outdoor aficionados.
            </div>
            <div className="flex justify-center md:mt-14">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-black border-t-0 border-b border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-2 py-2 text-red-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 pl-[0px] border-b border-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-300 w-[11px] h-[11px]"
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
          <div className="hidden ml-auto lg:flex">
            <button className="flex items-center justify-center w-20 h-20 origin-center -rotate-90 rounded-full appearance-none hover:border-2 hover:border-gray-600 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current text-[#EBB70B] w-[30px] h-[30px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex md:gap-[30px] gap-5 md:justify-end justify-center md:pt-[160px] text-[13px] font-[400] mt-20 mb-5 md:m-0">
          <div>Disclaimer</div>
          <div>General Conditions</div>
          <div>Privacy statement</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
