"use client"

import React from 'react'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height} : Props) => {
    return (
    <div>
        <Image
        src={src}
        width={width}
        height={height}
        alt='skill image'
        className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' />
    </div>
  )
}

export default SkillDataProvider
