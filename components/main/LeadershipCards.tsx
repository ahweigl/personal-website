"use client"

import React from 'react'

const LeadershipCards = () => {
  return (
    <div className='max-w-[800px] w-full flex flex-col gap-16'>
      <h2 className="md:hidden font-tt-ramillas-light text-4xl text-white text-center mb-4">
        Leadership
      </h2>
      
      <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-30 shadow-[0_0_15px_rgba(255,255,255,0.25)] w-full relative max-w-[550px] mx-auto">
        <div className="absolute top-4 right-4 hidden md:block">
          <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300">
            January 2023 - Present
          </span>
        </div>
        <h3 className="font-tt-ramillas-light text-2xl md:text-3xl text-white mb-2">
          Sandbox
        </h3>
        <div className="space-y-4">
          <div>
            <p className="font-tt-ramillas-extralight text-sm text-gray-300 font-medium mb-1">
              Tech Director, May 2025 - Present
            </p>
            <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
              Leading 50+ developers, UI/UX, and brand designers building 6 full-stack projects, ranging from course scheduling to co-op reviews at Northeastern. Check us out at sandboxnu.com!
            </p>
          </div>
          <div>
            <p className="font-tt-ramillas-extralight text-sm text-gray-300 font-medium mb-1">
              Executive Director, May 2024 - May 2025
            </p>
            <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
              Managed 6 E-Board leaders, 7 Head-of roles, and 50+ club members across 6 project teams producing high-quality and impactful software for Northeastern students, faculty, and the greater Boston community.
            </p>
          </div>
          <div>
            <p className="font-tt-ramillas-extralight text-sm text-gray-300 font-medium mb-1">
              Operations Director, May 2023 - May 2024
            </p>
            <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
              Lead 70+ software developers, UX/UI designers, and brand designers across 8 project teams, managed club finances and logistics, assisted in project acquisition and recruiting efforts.
            </p>
          </div>
          <div>
            <p className="font-tt-ramillas-extralight text-sm text-gray-300 font-medium mb-1">
              Software Developer, Jan 2023 - May 2025
            </p>
            <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
              Collaborated with team of developers and designers on MFA Forms, a fully digital HR and paperwork management system, for the Boston Museum of Fine Arts.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-30 shadow-[0_0_15px_rgba(255,255,255,0.25)] w-full relative max-w-[550px] mx-auto">
        <div className="absolute top-4 right-4 hidden md:block">
          <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300">
            August 2022 - Present
          </span>
        </div>
        <h3 className="font-tt-ramillas-light text-2xl md:text-3xl text-white mb-2">
          NCWIT Campus Rep
        </h3>
        <p className="font-tt-ramillas-extralight text-lg text-gray-300 mb-3">
          Campus Representative
        </p>
        <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
          Leading outreach, event planning, and community engagement efforts at Northeastern & the greater Boston area for NCWIT, fostering community for women and other minorities pursuing careers in technology.
        </p>
      </div>

      <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-30 shadow-[0_0_15px_rgba(255,255,255,0.25)] w-full relative max-w-[550px] mx-auto">
        <div className="absolute top-4 right-4 hidden md:block">
          <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300">
            August 2024 - May 2025
          </span>
        </div>
        <h3 className="font-tt-ramillas-light text-2xl md:text-3xl text-white mb-2">
          AASIA
        </h3>
        <p className="font-tt-ramillas-extralight text-lg text-gray-300 mb-3">
          Mentor • Northeastern University
        </p>
        <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
          Peer mentor for Asian American Students in Action at Northeastern.
        </p>
      </div>
    </div>
  )
}

export default LeadershipCards 