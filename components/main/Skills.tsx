import { Language_skills, Framework_skills, Other_skills } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section 
    id='skills' 
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10 md:py-20 px-6 md:px-0'
    style={{transform: 'scale(0.9)'}}>
        <SkillText/>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-3 md:gap-5 items-center'>
            {Language_skills.map((image, index) => (
                <SkillDataProvider
                key={index}
                    src={image.Image}
                    width={image.width} 
                    height={image.height} 
                    index={index}
                    />
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-3 md:gap-5 items-center'>
            {Framework_skills.map((image, index) => (
                <SkillDataProvider
                key={index}
                    src={image.Image}
                    width={image.width} 
                    height={image.height} 
                    index={index}
                    />
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-3 md:gap-5 items-center'>
            {Other_skills.map((image, index) => (
                <SkillDataProvider
                key={index}
                    src={image.Image}
                    width={image.width} 
                    height={image.height} 
                    index={index}
                    />
            ))}
        </div>
        {/* <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Other_skill.map((image, index) => (
                <SkillDataProvider
                key={index}
                    src={image.Image}
                    width={image.width} 
                    height={image.height} 
                    index={index}
                    />
            ))}
        </div> */}
    </section>
  )
}

export default Skills