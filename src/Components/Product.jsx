import React from 'react'
import Button from './Button'
const Product = ({ val, mover, count }) => {
    return (
        <div className='w-full h-[16rem] py-5 text-white'>
            <div onMouseEnter={()=>{ mover(count)}} className='w-[95%] h-[100%] mx-auto py-8 flex justify-between items-center'>
                <div className='flex flex-col gap-10 justify-between'>
                    <h1 className='text-[1.9vw] tracking-tight font-medium'>{val.title}</h1>
                    <div className=''>
                        <h3 className='uppercase text-xs font-thin leading-tight'>web design</h3>
                        <h3 className='uppercase text-xs font-thin leading-tight'>webflow development</h3>
                        <h3 className='uppercase text-xs font-thin leading-tight'>Creative Development</h3>
                        <h3 className='uppercase text-xs font-thin leading-tight'>3d animations</h3>
                    </div>
                </div>
                <div className='flex flex-col gap-10 justify-between w-[35%]'>
                    <p className='text-sm font-medium'>{val.description}</p>
                    <Button />
                    {/* <div className='flex gap-5 justify-between'>
                        {val.live && <Button />}
                        {val.case && <Button name="New Case" />}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Product