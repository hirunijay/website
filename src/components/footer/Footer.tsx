import React from "react";

function Footer() {
  return(
    <div className="bg-black text-white h-[800px]">
      <div className="container mx-auto  ">
      <div className="pt-[150px]"><hr/></div>
      <div className="flex pt-[150px]">
        <div className="text-[24px] font-[300]">
          <div>About Us</div>
          <div>Community</div>
          <div>Help center</div>
          <div>Booking & cancellation</div>
          <div>How it works</div>
        </div>

        <div className="text-center ml-auto mr-auto 2xl:w-[420px] pl-[5%]">
          <div className="pb-[38.4px] font-[400] text-[30px] text-[#EBB70B]">Weekly and free</div>
          <div className="pb-[57.6px]">The only Newsletter worth riding. Carefully designed for young business professionals and outdoor aficionados.</div>
          <div className="flex justify-center mt-12">
        <input
          type="email"
          placeholder="Your email address"
          className=" border-t-0 border-b border-gray-300 focus:outline-none focus:ring focus:border-blue-500 bg-black"
        />
        <button
          type="submit"
          className="px-2 py-2 text-red-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 pl-[0px] border-b border-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-300 w-[11px] h-[11px]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>

        </button>
        </div>
        </div>
        <div className="ml-auto">
        <button
          className="px-2 py-2 text-red-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 pl-[0px]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-[#EBB70B] w-[30px] h-[30px] transform rotate-270">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

        </button>
        </div>
      </div>
      </div>
      <div className="flex gap-[30px] ml-[75%] pt-[160px] text-[13px] font-[400]">
        <div>Disclaimer</div>
        <div>General Conditions</div>
        <div>Privacy statement</div>
      </div>
    </div>
  );
}

export default Footer;
