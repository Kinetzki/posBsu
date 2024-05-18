// import React, { useEffect } from "react";

// function Taker({ takers, code }) {
//   useEffect(() => {
//    console.log(takers)
//   }, []);

//   return (
//     <div className="flex gap-10 hover:bg-slate-100 p-5 border-b-[0px] border-[#0000002f]">
//       <h1 className="w-[100px]">{code}</h1>
//       <h1 className="w-[500px]">{takers[code]["course_title"]}</h1>
//       <h1 className="w-[100px]">{takers[code].count}</h1>
//       <h1
//         className={
//           "w-[18px] h-[18px] rounded-full " +
//           (!takers[code].available ? "bg-red-500" : "bg-green-500")
//         }
//       ></h1>
//     </div>
//   );
// }

// export default Taker;
import React, { useEffect } from "react";

function Taker({ takers, code }) {
  useEffect(() => {
    console.log(takers);
  }, [takers]); // Added `takers` as a dependency to re-run the effect if `takers` changes

  // Check if takers and takers[code] are defined
  const taker = takers && takers[code];

  return (
    <div className="flex gap-10 hover:bg-slate-100 p-5 border-b-[0px] border-[#0000002f]">
      <h1 className="w-[100px]">{code}</h1>
      <h1 className="w-[500px]">{taker ? taker.course_title : "Loading..."}</h1>
      <h1 className="w-[100px]">{taker ? taker.count : "N/A"}</h1>
      <h1
        className={
          "w-[18px] h-[18px] rounded-full " +
          (taker ? (!taker.available ? "bg-red-500" : "bg-green-500") : "bg-gray-500")
        }
      ></h1>
    </div>
  );
}

export default Taker;

