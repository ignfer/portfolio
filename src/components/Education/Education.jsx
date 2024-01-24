import './Education.css'
import EducationCard from '../EducationCard/EducationCard';

export default function Education(){
  const educationJSON = {
    'course':[
      {
        'title':'Technologist Degree in Computer Science',
        'description':'The Technologist Degree in Computer Science trains professionals with the skills to act in the development, implementation and administration of computer systems. A fundamental aspect is that although students use different technologies throughout their degree, the focus is on that when they graduate from it, they are able to adapt to working with new technologies that arise or that they have not studied at throughout the race. This aspect of training is fundamental, especially taking into account the constant evolution of tools and technologies in the IT field.',
        'organization':'UTEC - UDELAR',
        'imagepath':'./assets/svgs/utec.svg',
        'status':'in course',
        'gpa':'4.6/5',
        'skill':[
          'C++',
          'Java',
          'Assembly',
          'Python',
          'Networks'
        ]
      }
    ]
  };
  return(
    <>
      <div className='education'>
        <p>
          Embarking on a continuous journey of learning and growth, my educational background
          reflects my dedication to staying at the forefront of technology. 
          Currently pursuing Technologist Degree in Computer Science, I am honing my skills and expanding 
          my knowledge to meet the ever-evolving demands of the tech landscape.
        </p>
        {educationJSON.course.map((course,index) => {
          return(<EducationCard key={index} course={course}/>);
        })}
      </div>
    </>
  );
}