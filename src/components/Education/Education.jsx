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
        'status':'in course (first two years already completed)',
        'gpa':'4.6/5',
        'skill':[
          'C++',
          'Java',
          'MySQL',
          'Relational Databases',
          'Computer Networks',
          'Operative Systems',
          'Linux administration',
          'Assembly',
          'Python',
        ]
      },{
        'title':'English certification',
        'description':'The EF Standard English Test is a standardized test of the English language designed for non-native English speakers. It is the product of EF Education First, a global language training company, and a team of language assessment experts including Lyle Bachman, Mari Pearlman, and Ric Luecht. EF compares the EFSET\'s accuracy to the most widely used high stakes standardized English tests: TOEFL, IELTS, and Cambridge International Examinations.',
        'organization':'EFSET',
        'imagepath':'./assets/svgs/efset.svg',
        'status':'completed',
        'gpa':'78/100 - C2 Proficient',
        'skill':[
          'English',
          'Language certification',
        ]
      },{
        'title':'Technological Middle Education',
        'description':'The EF Standard English Test is a standardized test of the English language designed for non-native English speakers. It is the product of EF Education First, a global language training company, and a team of language assessment experts including Lyle Bachman, Mari Pearlman, and Ric Luecht. EF compares the EFSET\'s accuracy to the most widely used high stakes standardized English tests: TOEFL, IELTS, and Cambridge International Examinations.',
        'organization':'ANEP - UTU',
        'imagepath':'./assets/svgs/anep.svg',
        'status':'completed',
        'gpa':'10/12',
        'skill':[
          'Java',
          'MySQL',
          'Relational Databases',
          'Visual Basics',
          'Arduino integration',
          'Computer Networks',
          'Operative Systems',
          'Linux administration',
          'PC Maintenance'
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