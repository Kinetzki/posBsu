import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Login from "./Login";

function App() {
  const [srCode, setSrCode] = useState(0);
  const [isNewUser, setIsNewUser] = useState(false);
  const [degree, setDegree] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(degree);
    if(degree) {
      setIsNewUser(true);
      navigate("/dashboard");
    }
  }, [degree])

  return (
    <>
      <Routes>
        <Route exact path="/dashboard" element={<Home srcode={srCode} degree={degree} isNewUser={isNewUser}/>} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/" element={<Login setSr={setSrCode} setNew={setIsNewUser} setDegree={setDegree}/>} />
      </Routes>
    </>
  );
}

export default App;
