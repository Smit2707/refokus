import { motion } from 'framer-motion'
import React from 'react'

const Marque = ({imagesurls}) => {
  return (
    <div className='text-white mt-[8vw] mb-[8vw] mx-auto w-[100%] flex gap-16 overflow-hidden'>
      <motion.div initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", duration: 10, repeat: Infinity}} className='flex flex-shrink-0 gap-12 py-10'>
        {imagesurls.map((url, index) => <img key={index} src={url} className='flex-shrink-0 w-[7vw]' />)}
      </motion.div>
      <motion.div initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", duration: 10, repeat: Infinity}} className='flex flex-shrink-0 gap-12 py-10'>
        {imagesurls.map((url, index) => <img key={index} src={url} className='flex-shrink-0 w-[7vw]' />)}
      </motion.div>
    </div>
  )
}

export default Marque