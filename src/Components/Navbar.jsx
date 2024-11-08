import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[95%] mx-auto py-4 px-0 flex justify-between items-center text-white'>
        <h3 className='border-[1px] border-white px-4 py-2 uppercase cursor-pointer hover:bg-white hover:text-[#0F1215] hover:font-medium ease-in duration-300 rounded-full text-xs font-semibold tracking-wide'>menu</h3>
        <img className='w-9 h-8 rounded-md cursor-pointer' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/664dc8b6bc52b50450919857_webclip.webp" alt="" />
        <h3 className='border-[1px] border-white px-4 py-2 uppercase cursor-pointer hover:bg-white hover:text-[#0F1215] hover:font-medium ease-in duration-300 rounded-full text-xs font-semibold tracking-wide'>contact</h3>
    </div>
  )
}

export default Navbar