import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Departments({ setDeg }) {
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
  const [degree, setDegree] = useState("");
  const [showDegrees, setShowDegrees] = useState(false);
  const [dept, setDept] = useState("");
  const [position, setPosition] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (dept) {
      setShowDegrees(true);
    } else {
      setShowDegrees(false);
    }
  }, [dept]);

  const handleProceed = () => {
    if (degree) {
        setDeg(degree);
    }
  }

  return (
    <div className="w-full h-full absolute bg-[#0000008f] top-0 z-[2] flex items-center justify-center">
      <div className="bg-white w-[800px] h-[400px] p-5 flex flex-col items-center gap-[50px] relative">
        {showDegrees && (
          <div
            className={`absolute top-[-80px] left-[${position.x}px] flex flex-col max-h-[85vh] w-[550px] bg-white overflow-y-auto gap-2 p-4`}
          >
            {depts[dept].map((deg) => {
              return (
                <h1
                  className="hover:bg-slate-300 cursor-pointer py-2 px-3"
                  onClick={() => {
                    setDegree(deg);
                    setShowDegrees(false);
                  }}
                >
                  {deg}
                </h1>
              );
            })}
          </div>
        )}

        <h1 className="flex flex-col w-full items-center text-[20px] font-semibold font-Inter">
          Program{" "}
          <span className="text-[14px] font-normal">
            Please select your program.
          </span>
        </h1>
        <div className="flex gap-3">
          <h1
            className="w-[250px] py-[20px] bg-[#0E87C9] text-center text-white font-Inter font-bold px-[30px] cursor-pointer"
            onClick={(e) => {
              setPosition({ x: e.clientX, y: e.clientY });
              setDept("coe");
            }}
          >
            College of Engineering
          </h1>
          <h1
            className="w-[250px] py-[20px] bg-[#0E87C9] text-center text-white font-Inter font-bold px-[30px] cursor-pointer"
            onClick={(e) => {
              setPosition({ x: e.clientX, y: e.clientY });
              setDept("cics");
            }}
          >
            CICS
          </h1>
          <h1
            className="w-[250px] py-[20px] bg-[#0E87C9] text-center text-white font-Inter font-bold px-[30px] cursor-pointer"
            onClick={(e) => {
              setPosition({ x: e.clientX, y: e.clientY });
              setDept("cet");
            }}
          >
            CET
          </h1>
        </div>
        <h1>{degree}</h1>
        <button onClick={handleProceed} className="px-[20px] py-[10px] bg-[#0E87C9] rounded-full text-white font-semibold hover:bg-slate-700">Proceed</button>
      </div>
    </div>
  );
}

export default Departments;
