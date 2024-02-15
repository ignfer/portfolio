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
        'modalDescription':[
          'After building various useful and abarcative projects this was the perfect oportunity to use my experience working with React to create a common place in which I could upload all my work and create my own personal brand, to explain my journey as a developer and show my value as a developer.',
          'The design process started on Figma'
        ],
        'modalRepoRoute':'https://github.com/ignfer/portfolio.github.io'
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
        'modalDescription':[
          'After building various useful and abarcative projects this was the perfect oportunity to use my experience working with React to create a common place in which I could upload all my work and create my own personal brand, to explain my journey as a developer and show my value as a developer.',
          'The design process started on Figma'
        ],
        'modalRepoRoute':'https://github.com/ignfer/portfolio.github.io',
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
        'modalDescription':[
          'After building various useful and abarcative projects this was the perfect oportunity to use my experience working with React to create a common place in which I could upload all my work and create my own personal brand, to explain my journey as a developer and show my value as a developer.',
          'The design process started on Figma'
        ],
        'modalRepoRoute':'https://github.com/ignfer/buddgy.github.io',
        'modalProjectRoute':'https://ignfer.github.io/buddgy.github.io/'
      }
    ]
  };

  return(
    <>
      <div className='experience'>
        <p>
          As a developer, I have a strong belief in serious projects as a means 
          of learning and showcasing my skills and my value. Here, you can find my most
          recent and relevant projects. Click or touch each card to see more information.
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