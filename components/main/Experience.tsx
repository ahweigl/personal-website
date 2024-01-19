import React from 'react'
import ExperienceText from '../sub/ExperienceText'
import ProjectsCard from '../sub/ProjectsCard'
import ExperienceCards from '../sub/ExperienceCards'

const Experience = () => {
  return (
    <section 
    id='experience' 
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 z-[20]'
    style={{transform: 'scale(0.9)'}}>
        <ExperienceText/>
        <ExperienceCards/>
    </section>
  )
}

export default Experience