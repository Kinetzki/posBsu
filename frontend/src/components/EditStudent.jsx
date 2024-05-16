import React, { useEffect, useState } from "react";
import axios from "axios";
import Button1 from "./Button1";
import PopUp from "./PopUp";
import del from "../assets/icons/delete.svg";
import Confirm from "./Confirm";
import AddCourse from "./AddCourse";

function EditStudent({ show, refresh }) {
  const [inputSr, setSr] = useState("");
  const [isError, setIsError] = useState(false);
  const [popMsg, setPopMsg] = useState("");
  const [user, setUser] = useState(null);
  const [userTaken, setUserTaken] = useState([]);
  const [isConfirm, setIsConfirm] = useState(false);
  const [selectedTaken, setSelectedTaken] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [newTaken, setNewTaken] = useState({});

  const searchStudent = async (srcode) => {
    if (srcode) {
      try {
        const response = await axios.get(
          `http://127.0.0.1:3001/api/v1/user/${srcode}/find`
        );
        if (response.status === 200) {
          console.log(response.data.user);
          setUser(response.data.user);
          await getAllTaken(srcode);
        }
      } catch (err) {
        const msg = err.response.data.message;
        setPopMsg(msg);
        setIsError(true);
        console.log(msg);
      }
    }
  };

  const getAllTaken = async (srcode) => {
    try {
      const takenAll = await axios.get(
        `http://127.0.0.1:3001/api/v1/user-course/${srcode}/all`
      );
      if (takenAll.status === 200) {
        setUserTaken(takenAll.data.userCourses);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTaken = async () => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:3001/api/v1/user-course/${selectedTaken}/delete`
      );
      if (response.status === 200) {
        setIsConfirm(false);
        setPopMsg("User Course Removed");
        setIsError(true);
        await getAllTaken(user.srcode);
      }
    } catch (err) {}
  };

  const addTaken = async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:3001/api/v1/user-course/create`, {...newTaken, srcode: user.srcode});
      if (response.status === 200) {
        setIsAdd(false);
        await getAllTaken(user.srcode);
      }
    }catch(err) {
    }
  };

  return (
    <div className="w-[900px] h-[500px] bg-white border-slate-400 border-[1px] absolute top-[100px] rounded-lg p-10 flex flex-col gap-3 z-[2] justify-between">
      <div className="flex gap-2 items-center w-full justify-between">
        <div className="flex gap-2 items-center">
          <h1>Search student:</h1>
          <input
            type="text"
            className="bg-slate-100 w-[200px] py-[10px] rounded-lg px-[10px]"
            placeholder="Enter SR-Code"
            onChange={(e) => {
              setSr(e.target.value);
            }}
          />
          <Button1
            text="Search"
            handleClick={async () => {
              await searchStudent(inputSr);
            }}
          />
        </div>
        {user && (
          <Button1
            text="Add Course Taken"
            handleClick={() => {
              setIsAdd(!isAdd);
            }}
          />
        )}
      </div>
      {user && (
        <div className="flex items-center justify-around border-[1px] border-slate-300 rounded-lg py-[25px]">
          <h1 className="text-black flex gap-5 font-semibold text-[18px] items-center">
            <span className="text-[15px] font-normal">Name: </span>
            {user.name}
          </h1>
          <h1 className="text-black flex gap-5 font-semibold text-[18px] items-center">
            <span className="text-[15px] font-normal">Program: </span>
            {user.degree}
          </h1>
        </div>
      )}
      <div className="h-full flex flex-col gap-2 bg-slate-200 relative rounded-md">
        {userTaken.length === 0 && (
          <h1 className="font-semibold text-slate-500 py-[20px] w-full text-center">
            No User Data
          </h1>
        )}
        {isError && (
          <PopUp
            text={popMsg}
            handleClick={() => {
              setIsError(!isError);
            }}
          />
        )}
        {isConfirm && (
          <Confirm
            text="Are you sure you want to remove course?"
            handleClick={deleteTaken}
            cancel={() => {
              setIsConfirm(false);
            }}
          />
        )}

        {isAdd && (
          <AddCourse
            handleClick={async () => {
              await addTaken();
            }}
            cancel={() => {
              setIsAdd(false);
            }}
            data={setNewTaken}
          />
        )}

        {userTaken.length > 0 && (
          <>
            <div className="flex w-full gap-2 items-center p-1 font-semibold">
              <h1 className="w-[165px] px-5">Course Code</h1>
              <h1 className="w-[490px] px-5">Course Title</h1>
              <h1 className="w-[70px] px-5">Grade</h1>
            </div>
            <div className="overflow-y-auto h-[200px] bg-slate-100 flex flex-col gap-1 p-1">
              {userTaken.map((taken) => {
                return (
                  <div className="flex w-full gap-2 items-center p-1">
                    <h1 className="w-[160px] px-5">{taken.course_code}</h1>
                    <h1 className="w-[500px] px-5 truncate">
                      {taken.course_title}
                    </h1>
                    <h1 className="w-[60px] px-5">{taken.grade}</h1>
                    <img
                      src={del}
                      alt=""
                      className="w-[20px] h-[20px] cursor-pointer"
                      onClick={() => {
                        setSelectedTaken(taken.id);
                        setIsConfirm(true);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      <div className="flex gap-2 w-full justify-end">
        {/* <button className="py-[10px] hover:bg-slate-400 rounded-full px-[20px] font-semibold" onClick={()=>{
          show(false);
        }}>
          Cancel
        </button> */}
        <Button1
          text="Ok"
          handleClick={async () => {
            await refresh();
            show(false);
          }}
        />
      </div>
    </div>
  );
}

export default EditStudent;
