"use client"

import React from 'react'

const ExperienceCards = () => {
  const cardBase = 'bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.08)] relative overflow-hidden'
  const card = `${cardBase} w-[350px] md:w-[400px] h-[320px] md:h-[280px] shrink-0`
  const heading = 'text-[#F6FDFF]'
  const sub = 'text-[#F6FDFF]/80'
  const body = 'text-[#F6FDFF]/60'
  const badge = 'bg-[#F6FDFF]/10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-[#F6FDFF]/80'
  const h3Class = `font-tt-ramillas-light text-2xl md:text-3xl mt-4 mb-2 pr-28 ${heading}`

  return (
    <>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>June 2026</span>
        </div>
        <h3 className={h3Class}>Reddit</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Software Engineer I · NYC</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Incoming Backend Software Engineer on Reddit&apos;s Spam Prevention team within Reddit Safety.
        </p>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>May – August 2025</span>
        </div>
        <h3 className={h3Class}>Reddit</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Software Engineer Intern · NYC</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Developed & shipped new ban evasion reporting flow for Safety experiences team to support deleted user reporting and make Reddit a safer platform.
        </p>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>January – May 2025</span>
        </div>
        <h3 className={h3Class}>WHOOP</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Software Engineer Co-op · Boston</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Contributed to production of new join/upgrade flow for WHOOP&apos;s 5.0 product launch using Next.JS, React, TypeScript, & Java.
        </p>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>June – August 2024</span>
        </div>
        <h3 className={h3Class}>Apple</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Software Engineer Intern · San Diego</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Developed full-stack feature end-to-end for Creativity Apps team using React, TypeScript, PostgreSQL, & Radix UI.
        </p>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>January – May 2024</span>
        </div>
        <h3 className={h3Class}>Akamai Technologies</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Software Development Engineer in Test Co-op · Boston</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Led redesign of E2E frontend testing systems for Application Security team, App & API Protector.
        </p>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>Summer – Fall 2023</span>
        </div>
        <h3 className={h3Class}>Lockheed Martin Space</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Software Engineer Intern · Denver</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Developed from-scratch Django GUI application for HiveStar&apos;s autonomous missions tasking platform with user-friendly frontend interface and SQL/Python backend.
        </p>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>January 2023 – Present</span>
        </div>
        <h3 className={h3Class}>Sandbox</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Executive Director, Project Lead, Developer</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Leading 75+ developers, UI/UX, and brand designers building 7 full-stack projects, ranging from course scheduling to co-op reviews at Northeastern. Check us out at sandboxnu.com!
        </p>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>August 2022 – Present</span>
        </div>
        <h3 className={h3Class}>NCWIT</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Campus Representative</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Leading outreach, event planning, and community engagement efforts at Northeastern & the greater Boston area for NCWIT, fostering community for women and other minorities pursuing careers in technology.
        </p>
      </div>

    </>
  )
}

export default ExperienceCards
