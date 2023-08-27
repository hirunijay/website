"use client";
import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { IoMdClose } from "react-icons/io";

const options = [
  { text: "Book Now", path: "/" },
  //   { text: "Ride", path: "/" },
];

function FloatButton() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <div
        className={`fixed z-50 bottom-10 right-[0%] ${open ? "hidden" : ""}`}
      >
        <div className="flex flex-row items-center md:py-10 translate-x-6 bg-gray-300 rounded-md shadow-md md:h-[30px] md:w-[170px] sm:w-[150px] sm:mr-[300px] sm:px-[5px]" style={{marginRight:"42px"}}>
          {options.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                onOpenModal();
                setTitle(item.text);
              }}
              className="flex items-center justify-center flex-1 h-12 font-mono text-2xl text-gray-900 border-r md:h-14 border-r-gray-500 hover:cursor-pointer last-of-type:border-r-0"
            >
              <p className="px-[5px]">{item.text} </p>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={true}
        styles={{
          modal: {
            // backgroundColor: "black",
            height: "85vh",
            borderRadius: "8px",
            // boxShadow: "none",
          },
        }}
      >
        <div className="flex flex-col w-full h-full gap-10 px-20 py-10 overflow-auto bg-white rounded-md scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded">
          {/* <div className="text-2xl text-center text-white">
            <span className="italic">Inquire Now </span>
            {title}
          </div> */}
          <form className="flex flex-col rounded-2xl">
            <div className="flex items-center justify-center font-medium lg:text-[40px] text-2xl">
              Inquire Now
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
        {/* <div
          className="absolute flex items-center justify-center w-16 h-16 mt-5 text-3xl translate-x-1/2 bg-white rounded-full shadow-lg lg:text-4xl text-zinc-950 right-1/2 hover:cursor-pointer"
          onClick={onCloseModal}
        >
          <IoMdClose />
        </div> */}
      </Modal>
    </>
  );
}

export default FloatButton;
