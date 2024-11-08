import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Button from './Button';


const Card = ({ width, start, para, hover, background, title }) => {
    return (
        <div className={`${width} ${background} hover:text-black p-6 rounded-xl flex flex-col justify-between ${hover} ease-linear duration-300`}>
            <div>
                <div className='w-full flex items-center justify-between'  >
                    <h3>{title}</h3>
                    <FaArrowRightLong />
                </div>
                <h2 className='text-[2vw] font-extrathin capitalize mt-5'>Heading Demo</h2>
            </div>
            <div className='flex justify-between items-center mt-60'>
                {
                    start && (
                        <>
                            <h2 className='text-[4vw] font-thin tracking-tight leading-none'>Start a Project</h2>
                            <Button name="Contact Us" />
                        </>
                    )
                }
            </div>
            {
                para && (
                    <p className='text-sm text-zinc-400 font-medium w-[60%]'>News On Web Design, Webflow Development, Agency Life and more news and insights from Refokus Team.</p>
                )
            }
        </div>
    )
}

export default Card