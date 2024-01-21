import './Experience.css'

import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { useState } from 'react';

export default function Experience(){
  
  const experienceJSON = {
    'experience':[
      {
        'imagepath':'./assets/images/budggy.png',
        'title':'Personal Web Portfolio',
        'role':'Java Fullstack developer',
        'description':'The site you are reading right now!',
        'badges':[
          'React',
          'Yarn',
          'Vite',
          'GitHub Pages'
        ]
      },{
        'imagepath':'./assets/images/budggy.png',
        'title':'Java Fullstack distributed app',
        'role':'Java Fullstack developer',
        'description':'Consisting of a Java Backend, a SOAP API and a web page created using JSP and Servlets, the goal was to create a webpage able to communicate tourist and activities on Uruguay.',
        'badges':[
          'Java',
          'FullStack',
          'ORM',
          'MySQL'
        ]
      },{
        'imagepath':'./assets/images/budggy.png',
        'title':'Web Spending Tracker',
        'role':'Software engineer - Web developer',
        'description':'Buddgy is a personal project wich I\'ve created in order to know in which topics or areas I was spending my money.',
        'badges':[
          'HTML',
          'CSS',
          'Java Script',
          'Build from scratch',
          'Personal project'
        ]
      },{
        'imagepath':'./assets/images/budggy.png',
        'title':'Hotels Manager',
        'role':'Software engineer - Web developer',
        'description':'Buddgy is a personal project wich I\'ve created in order to know in which topics or areas I was spending my money.',
        'badges':[
          'C++',
          'CLI',
        ]
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
            return <ExperienceCard key={index} experience={element}/>
          })}
        </div>
      </div>
    </>
  );
}