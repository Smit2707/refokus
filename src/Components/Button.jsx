import React from 'react'
import { IoMdReturnRight } from "react-icons/io";


const Button = ({name="View Case Study"}) => {
  return (
    <div className='w-[13vw] px-4 py-2 bg-zinc-100 hover:bg-[#0F1215] hover:border-white border-[1px] outline-none hover:text-white ease-in duration-300 text-black rounded-full flex items-center justify-between cursor-pointer'>
        <span className='text-sm font-medium'>{name}</span>
        <IoMdReturnRight />
    </div>
  )
}

export default Button