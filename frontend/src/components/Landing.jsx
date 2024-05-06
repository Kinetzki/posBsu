import React from "react";
import bg from "../assets/images/loginBg.png";
import loginLogo from "../assets/images/loginLogo.svg";
import Button1 from "./Button1";

function Landing({ next }) {
  return (
    <div className="bg-[#C21B1B] w-screen h-[calc(100vh-70px)] flex items-center flex-col relative pt-[70px]">
      <img
        src={bg}
        alt=""
        className="absolute object-cover w-full h-full top-0 left-0"
      />
      <div className="flex w-full items-center justify-center z-[1] gap-3">
        <div className="flex flex-col w-[45%] gap-5">
          <h1 className="font-sans font-bold text-[50px] leading-[1.2] text-white">
            POS GENERATION SYSTEM FOR ALANGILAN GRADUATE SCHOOL
          </h1>
          <p className="w-[80%] text-white">
            Registration period for FIRST SEMESTER, SY 2024-2025 opens on May 24
            - August 24, 2024.{" "}
          </p>
          <Button1 text={"Log in"} handleClick={() => {
            next("login")
          }} />
        </div>

        <img src={loginLogo} alt="" className="w-[400px]" />
      </div>
      {/* Background */}
    </div>
  );
}

export default Landing;
