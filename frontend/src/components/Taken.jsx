import axios from "axios";
import React, { useEffect, useState } from "react";
import TakenCourse from "./takenCourse";

function Taken({ srcode }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchTaken = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/user-course/${srcode}/all`
        );
        console.log(response.data.userCourses);
        setCourses(response.data.userCourses);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTaken();
  }, []);

  return (
    <div className="w-full flex flex-col p-2 px-[50px] min-h-[50vh]">
      <div>
        <h1 className="font-semibold text-[20px] leading-none">
          Courses Taken
        </h1>
        <p>
          The listed courses below are the past courses taken by the student.
        </p>
      </div>
      <div>
        <div className="flex px-5 py-2 items-center justify-around font-semibold mt-[30px]">
          <h1 className="text-black w-[100px]">Course Code</h1>
          <h1 className="text-black w-[300px]">Course Title</h1>
          <h1 className="text-black w-[50px] text-center">Units</h1>
          <h1 className="text-black w-[100px]">Section</h1>
          <h1 className="text-black w-[200px] truncate">Instructor</h1>
          <h1 className="text-black w-[120px]">Academic Year</h1>
        </div>

        {(courses.length > 0) && courses.map((course, i) => {
          return <TakenCourse course={course} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Taken;
