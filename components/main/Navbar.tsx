import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#1d4ed8]/50 bg-[#03001417 backdrop-blur-md z-50 px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
                <Image src="/Sparkle.gif" alt="GIF Icon" width={30}
                        height={30}
                        className='cursor-pointer'/>

                    <span className='font-swell text-xl ml-[10px] hidden md:block text-gray-300'>
                        Angela Weigl
                    </span>
                </a>

                <div className='flex-1 h-full flex flex-row items-center justify-center'>
                    <div className='font-proxima-nova flex items-center justify-center gap-16 h-auto border border-[#1d4ed8] bg-[#0300145e] px-[40px] py-[10px] rounded-full text-gray-200'>
                        <a href='#about-me' className='cursor-pointer'>About me</a>
                        {/* <a href='#experience' className='cursor-pointer'>Experience</a> */}
                        <a href='#skills' className='cursor-pointer'>Skills</a>
                        {/* <a href='#projects' className='cursor-pointer'>Projects</a> */}
                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    {Socials.map((social) => (
                     <a href={social.link} key={social.name} target='_blank' rel='noopener noreferrer'>
                         <Image src={social.src} alt={social.name} height={24} width={24} />
                       </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar