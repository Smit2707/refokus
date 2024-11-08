import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
const Products = () => {
    const [position, setPosition] = useState(0)
    const mover = (val) => {
        setPosition(val * 16)
    }
    var products = [
        { title: "Cula", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, velit animi nam sit impedit quibusdam.", btn_content: "View Case Study", live: true, case: false },
        { title: "BCG Platinion", description: "We created a robust website that blends top notch design and facilitates dynamic content to the requirements of 74 locations, all powered by Webflow’s modern CMS, giving the BCG Platinion marketing team a completely new experience for content management.", btn_content: "View Case Study", live: true, case: true },
        { title: "Arqitel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, velit animi nam sit impedit quibusdam.", btn_content: "View Case Study", live: true, case: false },
        { title: "Sevdesk", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, velit animi nam sit impedit quibusdam.", btn_content: "View Case Study", live: true, case: false },
        { title: "Layout Land", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, velit animi nam sit impedit quibusdam.", btn_content: "View Case Study", live: true, case: false },
    ]
    return (
        <div className='relative'>
            {products.map((val, index) => {
                return (
                    <Product val={val} mover={mover} count={index} />
                )
            })}
            <div className='w-full h-full absolute top-0 pointer-events-none  '>
                <motion.div
                    initial={{ y: position, x: "-50%" }}
                    animate={{ y: position + `rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                    className='w-[22rem] h-[16rem] bg-white absolute left-[40%] overflow-hidden rounded-xl '>
                    <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-100'>
                        <img className='h-full w-full object-cover' src='https://plus.unsplash.com/premium_photo-1683288537140-e5dd2c5f0911?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                    </motion.div>
                    <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-300'>
                        <img className='h-full w-full object-cover' src='https://plus.unsplash.com/premium_photo-1683288537078-a04cc87545f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                    </motion.div>
                    <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-400'>
                        <img className='h-full w-full object-cover' src='https://plus.unsplash.com/premium_photo-1683731896418-493316129f0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                    </motion.div>
                    <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-500'>
                        <img className='h-full w-full object-cover' src='https://plus.unsplash.com/premium_photo-1684356819140-e82e7446b600?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8' alt="" />
                    </motion.div>
                    <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-500'>
                        <img className='h-full w-full object-cover' src='https://plus.unsplash.com/premium_photo-1683288706400-a6355868d9a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Products