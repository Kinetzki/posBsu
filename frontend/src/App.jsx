import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Login from "./Login";

function App() {
  const [srCode, setSrCode] = useState(0);
  const [isNewUser, setIsNewUser] = useState(false);
  const [degree, setDegree] = useState("");
  useEffect(()=>{
    if(degree) {
      setIsNewUser(true);
    }
  }, [degree])
  
  return (
    <>
      <Routes>
        <Route exact path="/dashboard" element={<Home srcode={srCode}/>} degree={degree} isNewUser={isNewUser}/>
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/" element={<Login setSr={setSrCode} setNew={setIsNewUser} setDegree={setDegree}/>} />
      </Routes>
    </>
  );
}

export default App;
