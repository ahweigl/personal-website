"use client" 

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { useInView } from 'react-intersection-observer'

const ExperienceText = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
      })
      
      const imageVariants = {
        hidden: {opacity: 0}, 
        visible: {opacity: 1}
      }

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center font-swell flex flex-row gap-2 mt-15 text-6xl text-white max-w-[600px] w-auto h-auto'>
             <motion.div
    ref={ref}
    initial='hidden'
    variants={imageVariants}
    animate={inView ? 'visible' : 'hidden'}
    transition={{delay: 0.2}}>
        <span>Experience</span>
    </motion.div>
        </div>
    )
}

export default ExperienceText