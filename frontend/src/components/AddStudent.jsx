import React, { useEffect, useState } from "react";
import Button1 from "./Button1";

function AddStudent({ data, show, submit }) {
  const depts = {
    coe: [
      "Straight Master's-Doctoral in Electronics Engineering",
      "Doctor of Philosophy in Engineering Management",
      "Doctor of Philosophy in Engineering Education",
      "Master of Science in Transportation Engineering",
      "Master of Science in Material Science and Engineering",
      "Master of Science in Earthquake Engineering",
      "Master of Science in Advanced Manufacturing",
      "Master of Science in Engineering Management",
      "Master of Science in Construction Management",
      "Doctor of Philosophy in Electronics Engineering",
      "Master of Science in Electronics Engineering",
      "Master of Science in Computer Engineering",
      "Master of Engineering major in Mechanical Engineering",
      "Master of Engineering major in Industrial Engineering",
      "Master of Engineering major in Environmental Engineering",
      "Master of Engineering major in Electrical Engineering",
      "Master of Engineering major in Electronics Engineering",
      "Master of Engineering major in Computer Engineering",
      "Master of Engineering major in Chemical Engineering",
      "Master of Engineering major in Civil Engineering",
    ],
    cics: [
      "Master of Science in Computer Science",
      "Master of Science in Data Science",
      "Master in Information Technology",
    ],
    cet: ["Master of Technology", "Doctor of Technology"],
  };

  const [dept, setDept] = useState("coe");
  useEffect(() => {
    console.log(dept);
  }, [dept]);
  return (
    <div className="w-[900px] h-[500px] bg-white border-slate-400 border-[1px] absolute top-[100px] rounded-lg p-10 flex flex-col gap-8 z-[2]">
      <h1 className="f font-Inter text-[20px]">
        Please fill out the fields below.
      </h1>
      <div className="flex gap-[100px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-Inter">Name:</h1>
          <input
            type="text"
            className="bg-slate-100 w-[400px] py-[10px] rounded-lg px-[10px]"
            onChange={(e) => {
              data((prev) => ({ ...prev, name: e.target.value }));
            }}
          />

          <h1 className="text-[18px] font-Inter">SR-Code:</h1>
          <input
            type="text"
            className="bg-slate-100 w-[400px] py-[10px] rounded-lg px-[10px]"
            onChange={(e) => {
              data((prev) => ({ ...prev, srcode: e.target.value }));
            }}
          />

          <h1 className="text-[18px] font-Inter">
            Academic Year {"(Ex: 2023-2024)"}:
          </h1>
          <input
            type="text"
            className="bg-slate-100 w-[400px] py-[10px] rounded-lg px-[10px]"
            onChange={(e) => {
              data((prev) => ({ ...prev, academic_year: e.target.value }));
            }}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[18px] font-Inter">Department: </h1>
          <select
            name="departments"
            id=""
            value={dept}
            onChange={(e) => {
              setDept(e.target.value);
            }}
            className="w-full bg-slate-100 p-2 rounded-lg"
          >
            {Object.keys(depts).map((dep) => {
              return <option value={dep}>{dep.toUpperCase()}</option>;
            })}
          </select>
          <h1 className="text-[18px] font-Inter">Program: </h1>
          <select
            name="departments"
            id=""
            onChange={(e) => {
              data((prev) => ({ ...prev, degree: e.target.value }));
            }}
            className="w-full bg-slate-100 p-2 rounded-lg"
          >
            {depts[dept].map((prog) => {
              return <option value={prog}>{prog}</option>;
            })}
          </select>
          <div className="w-full flex justify-end translate-y-[100px] items-center gap-3">
            <button className="py-[10px] hover:bg-slate-400 rounded-full px-[20px] font-semibold" onClick={()=>{
                show(false);
            }}>Cancel</button>
            <Button1 text="Submit" handleClick={()=>{
                submit();
                show(false);
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
