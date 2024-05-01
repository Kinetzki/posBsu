import React from "react";

function TakenCourse({course}) {
  return (
    <div className="flex px-5 py-2 items-center justify-around">
      <h1 className="text-black w-[100px]">{course.course_code}</h1>
      <h1 className="text-black w-[300px]">{course.course_title}</h1>
      <h1 className="text-black w-[50px] text-center">{" 3"}</h1>
      <h1 className="text-black w-[100px]">{course.section}</h1>
      <h1 className="text-black w-[200px] truncate">{course.instructor}</h1>
      <h1 className="text-black w-[120px]">{course.academic_year}</h1>
    </div>
  );
}

export default TakenCourse;
