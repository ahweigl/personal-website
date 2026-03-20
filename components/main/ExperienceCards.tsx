"use client"

import React from 'react'

const ExperienceCards = () => {
  const card = 'bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.08)] relative max-w-[550px] mx-auto md:mx-0'
  const heading = 'text-[#F6FDFF]'
  const sub = 'text-[#F6FDFF]/80'
  const body = 'text-[#F6FDFF]/60'
  const badge = 'bg-[#F6FDFF]/10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-[#F6FDFF]/80'

  return (
    <div className='w-full flex flex-col gap-10 max-w-[600px]'>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>June 2026</span>
        </div>
        <h3 className={`font-tt-ramillas-light text-2xl md:text-3xl mb-2 ${heading}`}>Reddit</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Software Engineer I · NYC</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Incoming Backend Software Engineer on Reddit's Spam Prevention team within Reddit Safety.
        </p>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>May – August 2025</span>
        </div>
        <h3 className={`font-tt-ramillas-light text-2xl md:text-3xl mb-2 ${heading}`}>Reddit</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Software Engineer Intern · NYC</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Developed & shipped new ban evasion reporting flow for Safety experiences team to support deleted user reporting and make Reddit a safer platform.
        </p>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>January – May 2025</span>
        </div>
        <h3 className={`font-tt-ramillas-light text-2xl md:text-3xl mb-2 ${heading}`}>WHOOP</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Software Engineer Co-op · Boston</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Contributed to production of new join/upgrade flow for WHOOP&apos;s 5.0 product launch using Next.JS, React, TypeScript, & Java.
        </p>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>June – August 2024</span>
        </div>
        <h3 className={`font-tt-ramillas-light text-2xl md:text-3xl mb-2 ${heading}`}>Apple</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Software Engineer Intern · San Diego</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Developed full-stack feature end-to-end for Creativity Apps team using React, TypeScript, PostgreSQL, & Radix UI.
        </p>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>January – May 2024</span>
        </div>
        <h3 className={`font-tt-ramillas-light text-2xl md:text-3xl mb-2 ${heading}`}>Akamai Technologies</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Software Development Engineer in Test Co-op · Boston</p>
        <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
          Led redesign of E2E frontend testing systems for Application Security team, App & API Protector.
        </p>
      </div>

      <div className={card}>
        <div className="absolute top-4 right-4">
          <span className={badge}>June 2022 – January 2024</span>
        </div>
        <h3 className={`font-tt-ramillas-light text-2xl md:text-3xl mb-2 ${heading}`}>Lockheed Martin Space</h3>
        <p className={`font-tt-ramillas-extralight text-lg mb-3 ${sub}`}>Software Engineer Intern · Denver</p>
        <div className="space-y-4">
          <div>
            <p className={`font-tt-ramillas-extralight text-sm font-medium mb-1 ${sub}`}>Summer – Fall 2023</p>
            <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
              Developed from-scratch Django GUI application for HiveStar&apos;s autonomous missions tasking platform with user-friendly frontend interface and SQL/Python backend.
            </p>
          </div>
          <div>
            <p className={`font-tt-ramillas-extralight text-sm font-medium mb-1 ${sub}`}>Summer 2022</p>
            <p className={`font-tt-ramillas-extralight text-sm leading-relaxed ${body}`}>
              Designed, built, and integrated fully autonomous rover from scratch with 5G networking capabilities using PX4, ArduPilot, MavLink, performed live demos to Lockheed Martin international Chief Executives, VPs, Senior Engineers, and NASA astronauts.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ExperienceCards
