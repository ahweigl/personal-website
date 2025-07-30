"use client" 

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SkillText = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
      })
      
      const imageVariants = {
        hidden: {opacity: 0}, 
        visible: {opacity: 1}
      }

    return (
        <div className='flex flex-col items-center justify-center font-swell gap-2 mt-15 text-4xl md:text-6xl text-white max-w-[600px] w-auto h-auto'>
             <motion.div
    ref={ref}
    initial='hidden'
    variants={imageVariants}
    animate={inView ? 'visible' : 'hidden'}
    transition={{delay: 0.2}}>
        <span>Skills</span>
    </motion.div>
        </div>
    )
}

export default SkillText