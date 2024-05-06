import React from "react";
import bsuLogo from "../assets/icons/bsuLogo.svg"
function Header() {
  return (
    <div className="flex justify-between items-center px-5 py-1 bg-white shadow-md w-full h-[70px]">
      <div className="flex items-center gap-3">
        <img src={bsuLogo} alt="" className="w-[60px]"/>
        <div className="flex flex-col">
          <h1 className="leading-none font-semibold">Batangas State University</h1>
          <h1>The National Engineering University</h1>
        </div>
      </div>

      <div className="flex gap-10">
        <h1 className="font-semibold text-[15px] cursor-pointer">Home</h1>
        <h1 className="font-semibold text-[15px] cursor-pointer">About</h1>
        <h1 className="font-semibold text-[15px] cursor-pointer">Programs</h1>
      </div>
    </div>
  );
}

export default Header;
