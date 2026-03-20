"use client"

import React from 'react';

const HeroContent = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        <div
          className="font-tt-ramillas-light flex flex-col gap-2 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-center text-[#F6FDFF] select-none"
        >
          <span>
            Angela Weigl
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
