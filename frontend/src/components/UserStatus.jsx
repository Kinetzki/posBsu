import React from "react";
import { useNavigate } from "react-router-dom";

function UserStatus({ showDeps }) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full absolute bg-[#0000008f] top-0 z-[2] flex items-center justify-center">
      <div className="bg-white w-[400px] h-[400px] p-5 flex flex-col items-center gap-10">
        <h1 className="flex flex-col w-full items-center text-[20px] font-semibold font-Inter">
          Status{" "}
          <span className="text-[14px] font-normal">
            Please select your status.
          </span>
        </h1>
        <div className="flex flex-col items-center justify-center gap-5">
          <h1
            className="bg-[#909097] h-[80px] w-[150px] flex items-center justify-center text-white rounded-lg px-[60px] text-center py-[15px] font-bold text-[16px] cursor-pointer hover:bg-slate-800"
            onClick={() => {
              showDeps(true);
            }}
          >
            NEW ENROLLEE
          </h1>
          <h1
            className="bg-[#909097] h-[80px] w-[150px] flex items-center justify-center text-white rounded-lg px-[60px] text-center py-[15px] font-bold text-[16px] cursor-pointer hover:bg-slate-800"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            CURRENTLY TAKING
          </h1>
        </div>
      </div>
    </div>
  );
}

export default UserStatus;
