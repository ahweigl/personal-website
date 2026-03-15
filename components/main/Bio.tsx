"use client"

import React from 'react';

const BIO_TEXT = "I'm a full-stack developer and Honors CS and Business student at Northeastern University, combining my love for technology and creativity to build digital experiences that make a difference.";

const Bio = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 w-full z-[20]'>
      <div className='max-w-[800px] w-full flex flex-col gap-8'>
        <p className="font-tt-ramillas-extralight text-lg md:text-xl text-white text-center leading-relaxed">
          {BIO_TEXT}
          <br />
        </p>
      </div>
    </div>
  );
}

export default Bio;
