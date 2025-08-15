"use client"

import React from 'react'

const ExperienceCards = () => {
  return (
    <div className='max-w-[800px] w-full flex flex-col gap-16'>
      <h2 className="md:hidden font-tt-ramillas-light text-4xl text-white text-center mb-4">
        Experience
      </h2>
      
      <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-30 shadow-[0_0_15px_rgba(255,255,255,0.25)] relative max-w-[550px] mx-auto">
        <div className="absolute top-4 right-4 hidden md:block">
          <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300">
            May - August 2025
          </span>
        </div>
        <h3 className="font-tt-ramillas-light text-2xl md:text-3xl text-white mb-2">
          Reddit
        </h3>
        <p className="font-tt-ramillas-extralight text-lg text-gray-300 mb-3">
          Software Engineer Intern • NYC
        </p>
        <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
          Developed & shipped new ban evasion reporting flow for Safety experiences team to support deleted user reporting and make Reddit a safer platform.
        </p>
      </div>


      <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-30 shadow-[0_0_15px_rgba(255,255,255,0.25)] relative max-w-[550px] mx-auto">
        <div className="absolute top-4 right-4 hidden md:block">
          <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300">
            January - May 2025
          </span>
        </div>
        <h3 className="font-tt-ramillas-light text-2xl md:text-3xl text-white mb-2">
          WHOOP
        </h3>
        <p className="font-tt-ramillas-extralight text-lg text-gray-300 mb-3">
          Software Engineer Co-op • Boston
        </p>
        <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
          Contributed to production of new join/upgrade flow for WHOOP&apos;s 5.0 product launch using Next.JS, React, TypeScript, & Java.
        </p>
      </div>

      <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-30 shadow-[0_0_15px_rgba(255,255,255,0.25)] relative max-w-[550px] mx-auto">
        <div className="absolute top-4 right-4 hidden md:block">
          <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300">
            June - August 2024
          </span>
        </div>
        <h3 className="font-tt-ramillas-light text-2xl md:text-3xl text-white mb-2">
          Apple
        </h3>
        <p className="font-tt-ramillas-extralight text-lg text-gray-300 mb-3">
          Software Engineer Intern • San Diego
        </p>
        <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
          Developed full-stack feature end-to-end for Creativity Apps team using React, TypeScript, PostgreSQL, & Radix UI.
        </p>
      </div>

      <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-30 shadow-[0_0_15px_rgba(255,255,255,0.25)] relative max-w-[550px] mx-auto">
        <div className="absolute top-4 right-4 hidden md:block">
          <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300">
            January - May 2024
          </span>
        </div>
        <h3 className="font-tt-ramillas-light text-2xl md:text-3xl text-white mb-2">
          Akamai Technologies
        </h3>
        <p className="font-tt-ramillas-extralight text-lg text-gray-300 mb-3">
          Software Development Engineer in Test Co-op • Boston
        </p>
        <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
          Led redesign of E2E frontend testing systems for Application Security team, App & API Protector.
        </p>
      </div>

      <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-30 shadow-[0_0_15px_rgba(255,255,255,0.25)] relative max-w-[550px] mx-auto">
        <div className="absolute top-4 right-4 hidden md:block">
          <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300">
            June 2022 - January 2024
          </span>
        </div>
        <h3 className="font-tt-ramillas-light text-2xl md:text-3xl text-white mb-2">
          Lockheed Martin Space
        </h3>
        <p className="font-tt-ramillas-extralight text-lg text-gray-300 mb-3">
          Software Engineer Intern • Denver
        </p>
        <div className="space-y-4">
          <div>
            <p className="font-tt-ramillas-extralight text-sm text-gray-300 font-medium mb-1">
              Summer - Fall 2023
            </p>
            <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
              Developed from-scratch Django GUI application for HiveStar&apos;s autonomous missions tasking platform with user-friendly frontend interface and SQL/Python backend.
            </p>
          </div>
          <div>
            <p className="font-tt-ramillas-extralight text-sm text-gray-300 font-medium mb-1">
              Summer 2022
            </p>
            <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
              Designed, built, and integrated fully autonomous rover from scratch with 5G networking capabilities using PX4, ArduPilot, MavLink, performed live demos to Lockheed Martin international Chief Executives, VPs, Senior Engineers, and NASA astronauts.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCards 