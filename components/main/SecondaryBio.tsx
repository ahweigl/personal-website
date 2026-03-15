"use client"

import React from 'react';

const SECONDARY_BIO_TEXT = "Currently, you can find me leading Sandbox at Northeastern building nonprofit software solutions for our community and preparing to graduate in Spring 2026. In my free time, I love hiking in my home state of Colorado, collecting vinyl records, and digital photography on my Fujifilm camera.";

const SecondaryBio = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 w-full z-[20]'>
      <div className='max-w-[800px] w-full flex flex-col gap-8'>
        <p className="font-tt-ramillas-extralight text-lg md:text-xl text-white text-center leading-relaxed">
          {SECONDARY_BIO_TEXT}
          <span className='block mt-6 opacity-60 italic'>Keep scrolling to learn more about me!</span>
        </p>
      </div>
    </div>
  );
}

export default SecondaryBio;
