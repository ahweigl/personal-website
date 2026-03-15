"use client"

import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar w-full h-[65px] fixed top-0 shadow-lg shadow-white/40 bg-[#03001417 backdrop-blur-md z-50 px-6 md:px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <div className='h-auto w-auto flex flex-row items-center'>
                    <span className='font-corinthia text-xl md:text-2xl text-gray-300'>
                        AW
                    </span>
                </div>

                <div className='flex flex-row gap-3 md:gap-5'>
                    {Socials.map((social) => (
                        <a href={social.link} key={social.name} target='_blank' rel='noopener noreferrer' className='nav-pulse-hover'>
                            <Image src={social.src} alt={social.name} height={20} width={20} className='md:h-6 md:w-6' />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar
