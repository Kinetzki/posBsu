import React from 'react'

function Button1({text, handleClick, icon}) {
  return (
    <div className='bg-[#0E87C9] text-white font-semibold p-2 rounded-full px-[25px] w-fit flex items-center justify-center gap-1 hover:bg-slate-800 h-[45px] cursor-pointer' onClick={handleClick}>
      {icon && <img src={icon} alt="" className='w-[35px]'/>}
        <button>{text}</button>
    </div>
    
  )
}

export default Button1