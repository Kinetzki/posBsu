import React from 'react'
import bsuLogo from "../assets/icons/bsuLogo.svg";

function Footer() {
  return (
    <div className='bg-[#C21B1B] w-full px-[20px] py-[10px] text-white justify-between flex mt-[50px]'>
        <div className='flex flex-col'>
        <h1 className='font-semibold text-[18px] leading-none'>BATANGAS STATE UNIVERSITY</h1>
        <h1>A premier national university that develops leaders in the global knowledge economy</h1>
        <h1 className='font-semibold text-[15px] leading-none'>Copyright @2024</h1>
        </div>
        <img src={bsuLogo} alt="" className="w-[60px]" />
        
    </div>
  )
}

export default Footer