import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='md:hidden fixed bottom-0 left-0 w-full bg-[#03001417] backdrop-blur-md py-2 px-3 z-40'>
        <div className='font-tt-ramillas-light text-[12px] text-center text-gray-300'>
          View on desktop for a more fun experience :)
        </div>
      </div>

      <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] px-4 md:px-[15px] pb-[45px] md:pb-[15px]'>
        <div className='font-tt-ramillas-light mb-[20px] text-[13px] md:text-[15px] text-center'>
          &copy; Angela Weigl 2025. Built with Next.js, React, Three.js, and Framer Motion.
        </div>
      </div>
    </>
  )
}

export default Footer