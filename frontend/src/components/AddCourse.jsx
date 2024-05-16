import React from "react";
import Button1 from "./Button1";

function AddCourse({ handleClick, data, cancel }) {
  return (
    <div className="absolute top-[20%] left-[50%] w-[850px] h-[420px] -translate-x-[50%] -translate-y-[50%] rounded-2xl flex flex-col items-center justify-between border-[2px] border-slate-400 bg-white gap-6 py-5">
      <div className="flex flex-col gap-2 w-full px-5 justify-start items-start">
        <h1 className="w-full text-center font-Inter font-bold">
          Add User Course Taken
        </h1>
        <br />
        <br />
        <div className="flex gap-2 items-center justify-center w-full">
          <h1 className="w-[110px] font-Inter font-medium">Course Code</h1>
          <input
            type="text"
            className="bg-slate-100 w-[200px] py-[10px] rounded-lg px-[10px]"
            placeholder="Course Code"
            onChange={(e) => {
              data((prev) => ({ ...prev, course_code: e.target.value }));
            }}
          />
          <h1 className="w-[120px] text-left font-Inter font-medium">
            Course Title
          </h1>
          <input
            type="text"
            className="bg-slate-100 w-[300px] py-[10px] rounded-lg px-[10px]"
            placeholder="Course Title"
            onChange={(e) => {
              data((prev) => ({ ...prev, course_title: e.target.value }));
            }}
          />
        </div>

        <br />
        <div className="w-full flex items-center justify-around">
          <h1 className="text-left font-Inter font-medium flex items-center gap-5">
            {" "}
            Grade{" "}
            <span>
              <input
                type="number"
                className="bg-slate-100 w-[100px] py-[10px] rounded-lg px-[10px]"
                placeholder="Grade"
                onChange={(e) => {
                  data((prev) => ({ ...prev, grade: e.target.value }));
                }}
              />
            </span>
          </h1>

          <h1 className="text-left font-Inter font-medium flex items-center gap-5">
            Instructor
            <span>
              <input
                type="text"
                className="bg-slate-100 w-[300px] py-[10px] rounded-lg px-[10px]"
                placeholder="Instructor"
                onChange={(e) => {
                  data((prev) => ({ ...prev, instructor: e.target.value }));
                }}
              />
            </span>
          </h1>
        </div>
        <br />

        <div className="w-full flex items-center justify-around">
          <h1 className="text-left font-Inter font-medium flex items-center gap-5">
            Section{" "}
            <span>
              <input
                type="text"
                className="bg-slate-100 w-[200px] py-[10px] rounded-lg px-[10px]"
                placeholder="Section"
                onChange={(e) => {
                  data((prev) => ({ ...prev, section: e.target.value }));
                }}
              />
            </span>
          </h1>

          <h1 className="text-left font-Inter font-medium flex gap-5 items-center">
            Academic Year
            <span>
              <input
                type="text"
                className="bg-slate-100 w-[200px] py-[10px] rounded-lg px-[10px]"
                placeholder="Academc Year"
                onChange={(e) => {
                  data((prev) => ({ ...prev, academic_year: e.target.value }));
                }}
              />
            </span>
          </h1>
        </div>
      </div>
      <div className="flex justify-around items-center gap-10">
        <Button1 text="Cancel" handleClick={cancel} />
        <Button1 text="Submit" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default AddCourse;
