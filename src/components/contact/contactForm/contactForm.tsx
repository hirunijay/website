"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactForm() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      // ... (other configuration settings)
    });
  }, []);
  return (
    <div className="pt-[70px] container mx-auto">
      <div className="flex justify-center">
        <div className="border-[15px] rounded-2xl lg:w-[50%] w-[80%] flex justify-center bg-white py-[20px]">
          <form className="flex flex-col rounded-2xl">
            <div className="flex items-center justify-center font-medium lg:text-[40px] text-2xl py-[20px]">
              Contact Us
            </div>
            <div className="pt-[20px]">
              <label>First Name</label>
              <br />
              <input
                type="text"
                className="border rounded-[10px] mt-[5px] xl:w-[300px] w-full py-[7px] bg-gray-100 p-4 focus:outline-none"
              />
            </div>
            <div className="pt-[20px]">
              <label>Last Name</label>
              <br />
              <input
                type="text"
                className="border rounded-[10px] mt-[5px] xl:w-[300px] w-full py-[7px] bg-gray-100 p-4 focus:outline-none"
              />
            </div>
            <div className="pt-[20px]">
              <label>Email</label>
              <br />
              <input
                type="text"
                className="border rounded-[10px] mt-[5px] xl:w-[300px] w-full py-[7px] bg-gray-100 p-4 focus:outline-none"
              />
            </div>
            <div className="pt-[20px]">
              <label>Phone</label>
              <br />
              <input
                type="text"
                className="border rounded-[10px] mt-[5px] xl:w-[300px] w-full py-[7px] bg-gray-100 p-4 focus:outline-none"
              />
            </div>
            <div className="pt-[20px]">
              <label>Message</label>
              <br />
              <input
                type="text"
                className="border rounded-[10px] mt-[5px] xl:w-[300px] w-full py-[7px] bg-gray-100 p-4 focus:outline-none "
              />
            </div>
            <button className="text-center border bg-red flex mx-[auto] px-8 py-1 text-lg font-medium mt-[50px] mb-[20px] rounded-[10px] bg-gray-100 hover:bg-gray-200">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
