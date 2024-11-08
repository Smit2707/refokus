import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className='w-full'>
            <div className="w-[95%] mx-auto py-20 flex gap-1 text-white">
                <Card title="blog" width={"basis-1/3"} start={false} para={true} hover="hover:bg-[#fff]" background="bg-[#46289A]" />
                <Card title="Get In Touch" width={"basis-2/3"} start={true} para={false} hover="hover:bg-[#fff]" background="bg-[#7542FF]" />
            </div>
        </div>
    )
}

export default Cards