"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface WhatImItem {
  category: string
  items: string[]
  icon: string
}

const whatImData: WhatImItem[] = [
  {
    category: "listening to",
    items: ["The Strokes", "Del Water Gap", "Jeff Buckley", "Dijon", "Harry Styles", "The Brook & The Bluff", "Olivia Dean", "Magdalena Bay", "The Marias"],
    icon: "/headphones-icon.png"
  },
  {
    category: "reading",
    items: ["Designing Your Life by Bill Burnett and Dave Evans", "Cosmos by Carl Sagan", "Invisible Women: Data Bias in a World Designed for Men by Caroline Criado Perez"],
    icon: "/book-icon.png"
  },
  {
    category: "eating",
    items: ["thai food", "vanilla cold brew", "acai bowls", "anything with protein in my Ninja Creami", "Trader Joes korean food", "frozen grapes"],
    icon: "/food-icon.png"
  },
  {
    category: "enjoying",
    items: ["my cat Gibson", "yoga", "my fujifilm x100v camera", "skiing wherever I can", "bouldering", "chipping away at my Letterboxd watchlist", "maintaining my 60+ week Beli streak"],
    icon: "/sparkle-icon.png"
  }
]

const WhatImSection = () => {
  return (
    <div className='max-w-[800px] w-full flex flex-col gap-8'>
      <h2 className="md:hidden font-tt-ramillas-light text-4xl text-white text-center mb-4">
        What I&apos;m...
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {whatImData.map((item, index) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-6 border border-white border-opacity-30 shadow-[0_0_15px_rgba(255,255,255,0.25)] h-[240px] w-full">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={item.icon}
                  alt={`${item.category} icon`}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <h3 className="font-tt-ramillas-light text-xl md:text-2xl text-white">
                  {item.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.items.map((listItem, itemIndex) => (
                  <motion.span
                    key={listItem}
                    className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: itemIndex * 0.1 }}
                  >
                    {listItem}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default WhatImSection 