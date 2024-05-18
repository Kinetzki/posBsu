import React, { useEffect, useState } from "react";
import sort from "../assets/icons/sort.svg";

function Dropdown({ items, setKey }) {
  const [isClicked, setIsClicked] = useState(false);
  const [active, setActive] = useState(items[0]);
  useEffect(()=>{setKey(active)},[active])
  return (
    <div
      className="flex gap-2 justify-between px-[20px] w-[200px] h-[45px] border-[1px] border-slate-400 rounded-lg items-center relative select-none cursor-pointer"
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      <h1 className="font-semibold truncate w-[180px]">{active}</h1>
      <img src={sort} alt="" className="w-[10px]" />
      {isClicked && (
        <div className="absolute top-[50px] left-0 flex flex-col gap-1 min-w-[500px] border-[1px] border-slate-400 p-2 bg-white rounded-lg">
          {items.map((item) => {
            return (
              <h1
                className="h-[30px] px-[20px] hover:bg-slate-200"
                onClick={() => {
                  setActive(item);
                }}
              >
                {item}
              </h1>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
