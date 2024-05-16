import axios from "axios";
import React, { useState, useEffect } from "react";
import RequiredSub from "./RequiredSub";
import Loader from "./Loader";

function Required({ srcode }) {
  const [requiredSubs, setRequiredSubs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRequired = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/user/${srcode}/required`
      );
      setRequiredSubs(response.data.courseTypes);
      console.log(response.data.courseTypes);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRequired();
  }, []);
  
  return (
    <div className="flex flex-col w-full p-5 min-h-[50vh]">
      <div>
        <h1 className="font-semibold text-[20px] leading-none">
          Required Courses
        </h1>
        <p>
          The listed courses below are the required courses to be taken by the student.
        </p>
      </div>
      {isLoading && <Loader/>}
      {
        // requiredSubs.map((req,i) => {
        //     return (
        //         <RequiredSub course={req} key={i}/>
        //     )
        // })
        Object.keys(requiredSubs).map((el) => {
          return (
            <div className="flex flex-col my-5">
              <h1 className="w-full bg-slate-100 text-center font-semibold text-[18px]">{el.toUpperCase()}</h1>
              {requiredSubs[el].map((item, i) => {
                return <RequiredSub course={item} key={i} />;
              })}
            </div>
          );
        })
      }
    </div>
  );
}

export default Required;
