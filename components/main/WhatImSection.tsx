"use client"

import React from 'react'
import Image from 'next/image'

interface WhatImItem {
  category: string
  items: string[]
  icon: string
}

const whatImData: WhatImItem[] = [
  {
    category: "listening to",
    items: ["The Strokes", "Del Water Gap", "Jeff Buckley", "Dijon", "Harry Styles", "The Brook & The Bluff", "Olivia Dean", "Magdalena Bay"],
    icon: "/headphones-icon.png"
  },
  {
    category: "reading",
    items: ["Designing Your Life by Bill Burnett and Dave Evans", "Cosmos by Carl Sagan", "Invisible Women: Data Bias in a World Designed for Men by Caroline Criado Perez"],
    icon: "/book-icon.png"
  },
  {
    category: "eating",
    items: ["thai food", "vanilla cold brew", "anything with protein in my Ninja Creami", "Trader Joes korean food", "frozen grapes"],
    icon: "/food-icon.png"
  },
  {
    category: "enjoying",
    items: ["my cat Gibson", "yoga", "my fujifilm x100v camera", "skiing wherever I can", "bouldering", "maintaining my 80+ week Beli streak"],
    icon: "/sparkle-icon.png"
  }
]

const cardAnimations = [
  { name: 'float-card-0', x: '-9px',  y0: '-10px', y1: '-22px', rotate: '-2.5deg', duration: '4s',   delay: '0s'   },
  { name: 'float-card-1', x: '11px',  y0: '9px',   y1: '-3px',  rotate: '2deg',    duration: '4.7s', delay: '0.8s' },
  { name: 'float-card-2', x: '7px',   y0: '-5px',  y1: '-17px', rotate: '1.5deg',  duration: '5.3s', delay: '1.5s' },
  { name: 'float-card-3', x: '-12px', y0: '11px',  y1: '1px',   rotate: '-3deg',   duration: '4.2s', delay: '0.3s' },
]

const keyframeCSS = cardAnimations.map(c => `
  @keyframes ${c.name} {
    0%, 100% {
      transform: translateY(${c.y0});
      box-shadow: 0 0 15px rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.25);
    }
    50% {
      transform: translateY(${c.y1});
      box-shadow: 0 0 32px rgba(255,255,255,0.18), 0 20px 48px rgba(0,0,0,0.35);
    }
  }
`).join('\n')

const WhatImSection = () => {
  return (
    <div className='w-full flex flex-col gap-8 max-w-[800px]'>
      <style>{keyframeCSS}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-24 md:gap-y-24 py-10 px-6 overflow-visible justify-items-center">
        {whatImData.map((item, index) => {
          const anim = cardAnimations[index]
          return (
            <div
              key={item.category}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/20 h-[240px] w-[280px]"
              style={{
                animation: `${anim.name} ${anim.duration} ease-in-out infinite ${anim.delay}`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={item.icon}
                  alt={`${item.category} icon`}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <h3 className="font-tt-ramillas-light text-xl md:text-2xl text-[#F6FDFF]">
                  {item.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.items.map((listItem) => (
                  <span
                    key={listItem}
                    className="bg-white/10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-[#F6FDFF]/80"
                  >
                    {listItem}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WhatImSection
