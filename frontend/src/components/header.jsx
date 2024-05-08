import React from "react";
import bsuLogo from "../assets/icons/bsuLogo.svg";
import logout from "../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";

function Header({ srcode }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-5 py-1 bg-white shadow-md w-full h-[70px]">
      <div className="flex items-center gap-3">
        <img src={bsuLogo} alt="" className="w-[60px]" />
        <div className="flex flex-col">
          <h1 className="leading-none font-semibold">
            Batangas State University
          </h1>
          <h1>The National Engineering University</h1>
        </div>
      </div>

      <div className="flex gap-10">
        {srcode !== "admin" && (
          <h1
            className="font-semibold text-[15px] cursor-pointer"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Home
          </h1>
        )}
        <h1
          className="font-semibold text-[15px] cursor-pointer"
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </h1>
        <h1
          className="font-semibold text-[15px] cursor-pointer"
          onClick={() => {
            navigate("/programs");
          }}
        >
          Programs
        </h1>
        {srcode && (
          <div className="flex gap-3 items-center">
            <h1 className="font-semibold text-[15px] leading-none">
              {srcode}
              <span className="text-[11px]">
                <br />
                SR-CODE
              </span>
            </h1>
            <img
              src={logout}
              alt=""
              className="w-[30px] cursor-pointer"
              onClick={() => {
                location.reload();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
