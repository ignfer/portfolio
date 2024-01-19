import './Experience.css'

import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { useState } from 'react';

export default function Experience(){
  
  const experienceJSON = {
    'experience':[
      {
        'title':'TurismoUy',
        'role':'Java Fullstack developer',
        'description':'Consisting of a Java Backend, a SOAP API and a web page created using JSP and Servlets, the goal was to create a webpage able to communicate tourist and activities on Uruguay.'
      },
      {
        'title':'Buddgy',
        'role':'Software engineer - Web developer',
        'description':'Buddgy is a personal project wich I\'ve created in order to know in which topics or areas I was spending my money.'
      }
    ]
  };
  
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
          {
            experienceJSON.experience.map((element,index) => {
            return <ExperienceCard key={index} title={element.title} description={element.description}/>
          })}
        </div>
      </div>
    </>
  );
}