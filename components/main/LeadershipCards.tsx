"use client"

import React from 'react'

const LeadershipCards = () => {
  const card = 'bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.08)] relative w-full max-w-[600px]'
  const heading = 'text-white'
  const sub = 'text-gray-300'
  const body = 'text-gray-400'
  const badge = 'bg-white/10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300'

  return (
    <div className='w-full flex flex-col gap-10 max-w-[600px]'>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>January 2023 – Present</span>
        </div>
        <h3 className={`font-tt-ramillas-light text-2xl md:text-3xl mb-4 ${heading}`}>Sandbox</h3>
        <div className="space-y-4">
          <div>
            <p className={`font-tt-ramillas-extralight text-sm font-medium mb-1 ${sub}`}>Tech Director, May 2025 – Present</p>
            <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
              Leading 75+ developers, UI/UX, and brand designers building 7 full-stack projects, ranging from course scheduling to co-op reviews at Northeastern. Check us out at sandboxnu.com!
            </p>
          </div>
          <div>
            <p className={`font-tt-ramillas-extralight text-sm font-medium mb-1 ${sub}`}>Project Lead, January 2026 – Present</p>
            <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
              Leading 10 talented developers and designers working on Pyret, an introductory programming language used by all CS students at Northeastern and beyond.
            </p>
          </div>
          <div>
            <p className={`font-tt-ramillas-extralight text-sm font-medium mb-1 ${sub}`}>Executive Director, May 2024 – May 2025</p>
            <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
              Managed 6 E-Board leaders, 7 Head-of roles, and 50+ club members across 6 project teams producing high-quality and impactful software for Northeastern students, faculty, and the greater Boston community.
            </p>
          </div>
          <div>
            <p className={`font-tt-ramillas-extralight text-sm font-medium mb-1 ${sub}`}>Operations Director, May 2023 – May 2024</p>
            <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
              Lead 70+ software developers, UX/UI designers, and brand designers across 8 project teams, managed club finances and logistics, assisted in project acquisition and recruiting efforts.
            </p>
          </div>
          <div>
            <p className={`font-tt-ramillas-extralight text-sm font-medium mb-1 ${sub}`}>Software Developer, Jan 2023 – May 2025</p>
            <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
              Collaborated with team of developers and designers on MFA Forms, a fully digital HR and paperwork management system, for the Boston Museum of Fine Arts.
            </p>
          </div>
        </div>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>August 2022 – Present</span>
        </div>
        <h3 className={`font-tt-ramillas-light text-2xl md:text-3xl mb-2 ${heading}`}>NCWIT Campus Rep</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Campus Representative</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Leading outreach, event planning, and community engagement efforts at Northeastern & the greater Boston area for NCWIT, fostering community for women and other minorities pursuing careers in technology.
        </p>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>August 2024 – May 2025</span>
        </div>
        <h3 className={`font-tt-ramillas-light text-2xl md:text-3xl mb-2 ${heading}`}>AASIA</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Mentor · Northeastern University</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Peer mentor for Asian American Students in Action at Northeastern.
        </p>
      </div>

    </div>
  )
}

export default LeadershipCards
