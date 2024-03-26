import React from "react";
import { MdLogout } from "react-icons/md";

const DropDown = () => {
  return (
    <div className="absolute top-12 ml-[-120px] bg-white">
      <div className="border h-40 w-44">
        <div className="flex border-b p-2">
          <button className="bg-[#000000] text-white justify-end ml-[2px] items-center text-center justify-items-end rounded-full p-[5px] mt-2 h-7 text-[12px] md:text-[13px]">
            {"OY"}
          </button>
          <div className="p-1 mx-1">
            <p className="text-[11px] sm:text-[13px] font-medium ">
              Tolulope Olonibua
            </p>
            <p className="text-[9px] sm:text-[11px]">Tolulope@gmail.com</p>
          </div>
        </div>
        <div className="text-[12px] sm:text-[14px] p-3">
          <button className="flex items-center gap-1">
            <MdLogout className="mt-[2px]" />
            Sign in
          </button>
        </div>
        <div className="text-[12px] sm:text-[14px] p-3">
          <button className="flex items-center gap-1">
            <MdLogout className="mt-[2px]" />
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
