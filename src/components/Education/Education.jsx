import './Education.css'
import EducationCard from '../EducationCard/EducationCard';

export default function Education(){
  const educationJSON = {
    'course':[
      {
        'title':'Technologist Degree in Computer Science',
        'description':'The Technologist Degree in Computer Science trains professionals with the skills to act in the development, implementation and administration of computer systems. A fundamental aspect is that although students use different technologies throughout their degree, the focus is on that when they graduate from it, they are able to adapt to working with new technologies that arise or that they have not studied at throughout the degree. This aspect of training is fundamental, especially taking into account the constant evolution of tools and technologies in the IT field.',
        'organization':'UTEC - UDELAR',
        'imagepath':'./assets/svgs/utec.svg',
        'site':'https://utec.edu.uy/en/education/undergraduate-study/technologist-degree-in-computer-science/',
        'status':'in course (first two years already completed)',
        'gpa':'4.6/5',
        'year':'2021 - Present',
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
        'site':'https://www.efset.org/',
        'status':'completed',
        'gpa':'78/100 - C2 Proficient',
        'year':'2023',
        'skill':[
          'English',
          'Language certification',
        ]
      },{
        'title':'Technological Middle Education',
        'description':'The course empowers graduates with a diverse skill set for success in technology. They gain expertise in development, technical support, consultation, and installation of software, and the analysis and implementation of IT solutions. The program covers network installation, configuration of operating systems, and integration into larger development teams. Graduates excel in executing IT tasks, applying project methodologies, and contributing to interdisciplinary teams. Additionally, they acquire skills in designing and maintaining database systems, identifying security risks, and creating static web pages. This program provides a solid foundation for a dynamic and successful career in technology.',
        'organization':'ANEP - UTU',
        'imagepath':'./assets/svgs/anep.svg',
        'site':'https://www.utu.edu.uy/educacion-media-tecnologica-informatica-enfasis-desarrollo-y-soporte-desarrollo-web-videojuegos',
        'status':'completed',
        'gpa':'11/12',
        'year':'2017 - 2019',
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