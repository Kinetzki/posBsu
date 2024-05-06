import React, { useState } from 'react'
import Header from './components/header'
import Landing from './components/Landing';
import Login2 from './components/Login2';

function Login({setSr, setNew, setDegree}) {
  const [panel, setPanel] = useState("landing");

  return (
    <div>
      <Header/>
      {panel === "landing" && <Landing next={setPanel}/>}
      {panel === "login" && <Login2 setSr={setSr} setIsNewUser={setNew} setDegree={setDegree}/>}
    </div>
  )
}

export default Login