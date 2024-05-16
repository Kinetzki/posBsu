import React from "react";
import Button1 from "./Button1";

function Confirm({ text, handleClick, cancel }) {
  return (
    <div className="absolute top-[50%] left-[50%] w-[350px] h-[200px] -translate-x-[50%] -translate-y-[50%] rounded-2xl flex flex-col items-center justify-around border-[2px] border-slate-400 bg-white gap-6 py-5">
      <h1 className="text-[25px] font-Inter text-center text-slate-700">{text}</h1>
      <div className="flex justify-around items-center gap-10">
        <Button1 text={"Cancel"} handleClick={cancel} />
        <Button1 text={"OK"} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Confirm;
