"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden" 
    animate="visible" 
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='font-wild-mango flex flex-col gap-6 mt-15 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
                <span>
                Hello, <br/> I'm 
                <span className=" font-wildmango text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-blue-900"> Angela Weigl! </span>
                
                </span>
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className="font-montserrat text-lg text-gray-400 my-5 max-w-[600px]">
                I&apos;m a second-year Honors CS + Business Major at Northeastern University in Boston. Currently, you can find me developing software
                for Lockheed Martin Space's HiveStar autonomous missions distribution platform, leading Northeastern's Sandbox software consultancy as Operations Director, and volunteering as Northeastern's NCWIT Campus Rep.
            </motion.p>
            <motion.a
            variants={slideInFromLeft(1)}
            className="font-montserrat py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
                Download my resume!
            </motion.a>
        </div>

        <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"> 
        <Image
        src="/Headshot.png"
        alt="headshot" 
        height={550} 
        width={550}
        />

        </motion.div>
    </motion.div>
  )
}

export default HeroContent