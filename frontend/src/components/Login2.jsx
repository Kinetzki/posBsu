import React, { useEffect, useState } from "react";
import bg from "../assets/images/loginBg.png";
import loginLogo from "../assets/images/loginLogo.svg";
import Button1 from "./Button1";
import { useNavigate } from "react-router-dom";
import UserStatus from "./UserStatus";
import Departments from "./Departments";

function Login2({ setSr, setDegree }) {
  const [srcode, setSrCode] = useState("");
  const navigate = useNavigate();
  const [showUserStatus, setIsShowUserStatus] = useState(false);
  const [isShowDeps, setIsShowDeps] = useState(false);

  useEffect(() => {
    if (isShowDeps) {
      setIsShowUserStatus(false);
    }
  }, [isShowDeps]);

  return (
    <div className="bg-[#C21B1B] w-screen h-[calc(100vh-70px)] flex items-center flex-col relative pt-[70px]">
      <img
        src={bg}
        alt=""
        className="absolute object-cover w-full h-full top-0 left-0"
      />
      {showUserStatus && <UserStatus showDeps={setIsShowDeps} />}
      {isShowDeps && <Departments setDeg={setDegree}/>}
      <div className="flex w-full items-center justify-center z-[1] gap-[80px]">
        {(!showUserStatus && !isShowDeps) && (
          <div className="flex flex-col w-[31%] gap-5 bg-white h-[400px] shadow-lg shadow-[#0000004f] px-[30px] items-center">
            <div className="w-full flex-col flex items-center justify-start p-5">
              <h1 className="font-bold text-[20px]">Login</h1>
              <p>Enter your login credentials.</p>
            </div>
            <input
              type="text"
              className="bg-slate-200 h-[50px] rounded-lg px-5 w-full"
              placeholder="SR-Code"
              onChange={(e) => {
                setSrCode(e.target.value);
              }}
            />
            <input
              type="password"
              className="bg-slate-200 h-[50px] rounded-lg px-5 w-full"
              placeholder="Password"
            />
            <div className="flex flex-col gap-1 mt-2">
              <h1 className="inline-block">
                Forgot Password?{" "}
                <span className="font-semibold">Click here</span>
              </h1>
              <div
                className="bg-[#0E87C9] text-white font-semibold p-3 rounded-full px-[80px] w-fit flex items-center justify-center gap-1 hover:bg-slate-800 cursor-pointer"
                onClick={() => {
                  // change this
                  setSr(srcode);
                  // navigate("/dashboard");
                  setIsShowUserStatus(true);
                }}
              >
                <button>Log in</button>
              </div>
            </div>
          </div>
        )}
        <img src={loginLogo} alt="" className="w-[400px]" />
      </div>
      {/* Background */}
    </div>
  );
}

export default Login2;
