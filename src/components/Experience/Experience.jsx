import './Experience.css'

import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { useState } from 'react';

export default function Experience(){
  
  const experienceJSON = {
    'experience':[
      {
        'imagepath':'./assets/images/budggy.png',
        'title':'Personal Web Portfolio',
        'description':'The site you are reading right now!',
        'badges':[
          'React',
          'Frontend',
          'Yarn',
          'Vite',
          'GitHub Pages'
        ],
        'modalRole':'React Developer',
        'modalDescription':'After building various useful and abarcative projects this was the perfect oportunity to use my experience working with React to create a common place in which I could upload all my work and create my own personal brand, to explain my journey as a developer and show my value.',
        'modalGitHubRepo':'https://github.com/ignfer/portfolio.github.io'
      },{
        'imagepath':'./assets/images/budggy.png',
        'title':'Java Fullstack distributed app',
        'description':'Consisting of a Java Backend, a SOAP API and a web page created using JSP and Servlets, the goal was to create a webpage able to communicate tourist and activities on Uruguay.',
        'badges':[
          'Java',
          'FullStack',
          'ORM',
          'MySQL'
        ],
        'modalRole':'React Developer',
        'modalDescription':'After building various useful and abarcative projects this was the perfect oportunity to use my experience working with React to create a common place in which I could upload all my work and create my own personal brand, to explain my journey as a developer and show my value.',
        'modalGitHubRepo':'https://github.com/ignfer/portfolio.github.io'
      },{
        'imagepath':'./assets/images/budggy.png',
        'title':'Web Spending Tracker',
        'description':'Buddgy is a personal project wich I\'ve created in order to know in which topics or areas I was spending my money.',
        'badges':[
          'Frontend',
          'HTML',
          'CSS',
          'Java Script',
          'Built from scratch',
          'Personal project'
        ],
        'modalRole':'React Developer',
        'modalDescription':'After building various useful and abarcative projects this was the perfect oportunity to use my experience working with React to create a common place in which I could upload all my work and create my own personal brand, to explain my journey as a developer and show my value.',
        'modalGitHubRepo':'https://github.com/ignfer/portfolio.github.io'
      },{
        'imagepath':'./assets/images/budggy.png',
        'title':'Hotels Manager',
        'description':'Buddgy is a personal project wich I\'ve created in order to know in which topics or areas I was spending my money.',
        'badges':[
          'C++',
          'CLI',
        ],
        'modalRole':'React Developer',
        'modalDescription':'After building various useful and abarcative projects this was the perfect oportunity to use my experience working with React to create a common place in which I could upload all my work and create my own personal brand, to explain my journey as a developer and show my value.',
        'modalGitHubRepo':'https://github.com/ignfer/portfolio.github.io'
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
            return <ExperienceCard key={index} index={index} experience={element}/>
          })}
        </div>
      </div>
    </>
  );
}