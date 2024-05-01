import React from "react";

function RequiredSub({ course }) {
  return (
    <div className="flex px-5 py-2 items-center justify-around">
      <h1 className="text-black w-[100px]">{course.course_code}</h1>
      <h1 className="text-black w-[400px]">{course.course_title}</h1>
      <h1 className="text-black w-[50px] text-center">{course.units}</h1>
      <h1 className="text-black w-[100px]">{course.course_type}</h1>
    </div>
  );
}

export default RequiredSub;
