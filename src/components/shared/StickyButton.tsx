"use client";
import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { IoMdClose } from "react-icons/io";

const options = [
  { text: "Land", path: "/" },
  { text: "Ride", path: "/" },
];

function StickyButton() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <div
        className={`fixed z-50 bottom-10 right-[50%] ${open ? "hidden" : ""}`}
      >
        <div className="flex flex-row items-center h-20 py-10 translate-x-1/2 rounded-md shadow-2xl bg-zinc-950 w-96 shadow-gray-900">
          {options.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                onOpenModal();
                setTitle(item.text);
              }}
              className="flex items-center justify-center flex-1 text-lg text-white border-r h-14 border-r-gray-500 hover:cursor-pointer"
            >
              <p>
                Choose <span className="italic">{item.text}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={false}
        styles={{
          modal: {
            backgroundColor: "transparent",
            height: "85vh",
            width: "25vw",
            borderRadius: "8px",
            boxShadow: "none",
          },
        }}
      >
        <div className="flex flex-col gap-10 bg-zinc-950 h-[80%] shadow-lg py-10 px-20 rounded-md w-full overflow-hidden shadow-gray-900">
          <div className="text-2xl text-center text-white">
            <span className="italic">Search for </span>
            {title}
          </div>
          <div className="flex flex-col gap-5 font-mono text-3xl font-semibold text-white uppercase">
            <div>Africa</div>
            <div>Europe</div>
            <div>N.America</div>
            <div>S.America</div>
            <div>Asia</div>
          </div>
        </div>
        <div
          className="absolute flex items-center justify-center mt-5 text-4xl translate-x-1/2 bg-white rounded-full 2xl:w-20 2xl:h-20 xl:w-15 xl:h-15 text-zinc-950 right-1/2 hover:cursor-pointer shadow-xl shadow-gray-900"
          onClick={onCloseModal}
        >
          <IoMdClose />
        </div>
      </Modal>
    </>
  );
}

export default StickyButton;
