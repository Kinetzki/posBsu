//assets
import upload from "./assets/icons/upload.svg";

import extractTextFromPDF from "./Utilit"; // Path to your utility function
import Button1 from "./components/Button1";
import Header from "./components/header";
import { processData } from "./utils/extractValueKeys";
import { useEffect, useState } from "react";
import React from "react";
import DragAndDrop from "./components/DragAndDrop";
import Required from "./components/Required";
import Taken from "./components/Taken";
import axios from "axios";

function Home({srcode, degree, isNewUser}) {
  const [data, setData] = useState(null);
  const [active, setActive] = useState("upload");

  const createUser = async (d) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/create",
        d
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=>{
    if (isNewUser) {
      const newUser = async () => {
        const response = await createUser({degree:degree, srcode:srcode, courses: [], academic_year: "2023-2024"})
      }
      newUser();
    }
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="w-full p-3">
        <div className="bg-[#C21B1B] w-full h-[100px] flex items-center justify-center text-white font-semibold text-[18px]">
          <h1>POS GENERATION SYSTEM</h1>
        </div>
      </div>
      <div className="px-[40px] flex justify-center gap-10">
        <Button1
          text={"Upload Grades"}
          handleClick={() => {
            console.log("Clicked");
            setActive("upload");
          }}
          icon={upload}
        />
        <Button1
          text={"Course Taken"}
          handleClick={() => {
            console.log("Clicked");
            setActive("taken");
          }}
        />
        <Button1
          text={"Required Courses"}
          handleClick={() => {
            console.log("Clicked");
            setActive("required");
          }}
        />
      </div>
      {active === "upload" && (
        <DragAndDrop
          setData={async (extract) => {
            console.log(extract)
            setData(extract);
            await createUser(extract);
            setActive("required");
          }}
        />
      )}
      {active === "required" && 
      <Required 
      srcode={srcode}
      />}
      {active === "taken" && <Taken srcode={srcode}/>}
    </div>
  );
}

export default Home;
