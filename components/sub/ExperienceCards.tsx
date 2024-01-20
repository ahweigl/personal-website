import React from 'react';
import ProjectsCard from './ProjectsCard';

const ExperienceCards = () => {
  return (
    <div id='projects' className='w-full flex flex-col items-center justify-center'>
      <div className='grid grid-cols-3 gap-10 px-10 mt-8'>
        <ProjectsCard
          src='/Akamai.png'
          title='Software Development Engineer in Test Co-op'
          description='January 2024 - Present'
        />
        <ProjectsCard
          src='/Lockheed.png'
          title='Software Engineer Intern'
          description='June 2022 - January 2024'
        />
        <ProjectsCard
          src='/Sandbox.png'
          title='Operations Director & Software Developer'
          description='January 2023 - Present'
        />
      </div>
    </div>
  );
};

export default ExperienceCards;
