import React from 'react'
import Button1 from './Button1'

function PopUp({text, handleClick}) {
  return (
    <div className='absolute top-[50%] left-[50%] w-[350px] h-[200px] -translate-x-[50%] -translate-y-[50%] rounded-2xl flex flex-col items-center justify-center border-[2px] border-slate-400 bg-white gap-6'>
    <h1 className='text-[25px] font-semibold'>{text}</h1>
    <Button1 text={"OK"} handleClick={handleClick}/>
    </div>
  )
}

export default PopUp