import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import DropDown from "./dropdown/DropDown";

const MenuBar = () => {
  const [showAbrv, setShowAbrv] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleCLick = () => {
    setShowAbrv(!showAbrv);
    setShowDropDown(!showDropDown);
  };

  return (
    <div>
      <div className="flex justify-between py-3 p-4 border-b">
        <ul className="flex text-[13px] md:text-[14px] gap-3">
          <li>Home</li>
          <li>Jobs</li>
          <li>Create a Job</li>
        </ul>
        <div
          onClick={handleCLick}
          className="bg-[#f3f3f3] rounded-full gap-1 p-2 h-8 flex items-center"
        >
          <IoIosMenu className="pointer text-[14px] md:text-[16px]" />
          {showAbrv && (
            <button className="bg-[#e2e2e2] justify-end ml-[2px] items-center text-center justify-items-end rounded-full p-[3.5px] h-6 text-[12px] md:text-[13px]">
              {"OY"}
            </button>
          )}
          {showDropDown && <DropDown />}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
