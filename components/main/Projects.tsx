import React from 'react'
import ProjectsCard from '../sub/ProjectsCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
       <h1 className='font-notelia text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
       </h1>
        <div className='font-notelia h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectsCard
            src='/NextWebsite.png'
            title='Modern Next.js portfolio' 
            description= 'adsfadfasdfasdfasdfasdf'/> <ProjectsCard
            src='/CardImage.png'
            title='Interactive Website Cards' 
            description= 'adsfadfasdfasdfasdfasdf'/>
            <ProjectsCard
            src='/SpaceWebsite.png'
            title='Space Themed Website' 
            description= 'adsfadfasdfasdfasdfasdf'/>
        </div>
    </div>
  )
}

export default Projects