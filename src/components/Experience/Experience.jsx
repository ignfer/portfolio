import './Experience.css'

import ExperienceCard from '../ExperienceCard/ExperienceCard';

export default function Experience(){
  return(
    <>
      <div className='experience'>
        <p>
          Here you can explore my software development journey
          through a collection of impactful projects. From intuitive
          web applications to efficient mobile solutions, each project showcases my 
          expertise and commitment to delivering top-notch solutions.
          Dive into my portfolio to witness a track record of 
          innovation, collaboration, and tangible results.
        </p>
        <div className='experience-card-container'>
          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard/>
        </div>
      </div>
    </>
  );
}