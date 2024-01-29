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
        'status':'in course | first two years already completed with a 4.6/5 GPA',
        'year':'2021 - Present',
        'skill':[
          'C++',
          'Java',
          'MySQL',
          'Linux',
          'Network administration',
          'Computer Networks',
          'Relational Databases',
          'Assembly',
          'Python',
        ]
      },{
        'title':'English Standarized Test',
        'description':'The EF Standard English Test is a standardized test of the English language designed for non-native English speakers. It is the product of EF Education First, a global language training company, and a team of language assessment experts including Lyle Bachman, Mari Pearlman, and Ric Luecht. EF compares the EFSET\'s accuracy to the most widely used high stakes standardized English tests: TOEFL, IELTS, and Cambridge International Examinations.',
        'organization':'EFSET',
        'imagepath':'./assets/svgs/efset.svg',
        'site':'https://www.efset.org/',
        'status':'completed | C2 Proficient 78/100',
        'year':'2023',
        'skill':[
          'English',
          'Language certification',
        ],
        'certification':'https://efset.org/cert/vdK9m4'
      },{
        'title':'Become a Salesforce Developer',
        'description':'The bootcamp consisted of an 8-week training course through Trailhead. Additionally, we had biweekly reviews with a project manager who guided us through the learning content. At the end of the bootcamp, we were challenged to develop a system capable of handling legal advisors and clients retrieved from a REST API on Heroku. The successful completion of that project earned me the certification for completing the bootcamp.',
        'organization':'Altimetrik Uruguay',
        'imagepath':'./assets/svgs/altimetrik.svg',
        'site':'https://www.linkedin.com/posts/altimetrikuy_salesforce-bootcamp-2023-activity-7105190139928154112-UsNM?utm_source=share&utm_medium=member_desktop',
        'status':'completed',
        'year':'2023',
        'skill':[
          'Salesforce',
          'Apex',
          'Lightning web components',
          'REST',
          'Unit Testing'
        ],
        'certification':'https://www.linkedin.com/in/ignaciofern%C3%A1ndez/overlay/1704245978475/single-media-viewer/?profileId=ACoAAClJnbEBH4QPy9OzpMPGilPUGiKgzuhV-aI'
      },{
        'title':'Technological Middle Education',
        'description':'The course empowers graduates with a diverse skill set for success in technology. They gain expertise in development, technical support and consultation, The program covers network installation, configuration of operating systems, and integration into larger development teams. Graduates excel in executing IT tasks, applying project methodologies, and contributing to interdisciplinary teams. This program provides a solid foundation for a dynamic and successful career in technology.',
        'organization':'ANEP - UTU',
        'imagepath':'./assets/svgs/anep.svg',
        'site':'https://www.utu.edu.uy/educacion-media-tecnologica-informatica-enfasis-desarrollo-y-soporte-desarrollo-web-videojuegos',
        'status':'completed',
        'year':'2017 - 2019',
        'skill':[
          'Java',
          'MySQL',
          'Relational Databases',
          'Visual Basics',
          'Arduino',
          'Computer Networks',
          'Operative Systems',
          'Linux',
          'PC Maintenance'
        ]
      }
    ]
  };
  return(
    <>
      <div className='education'>
        <p>
          Explore through my educational background which reflects my broad formation and constant dedication to staying 
          at the forefront of technology. Currently I am pursuing the last year of my Technologist Degree in Computer Science
        </p>
        {educationJSON.course.map((course,index) => {
          return(<EducationCard key={index} course={course}/>);
        })}
      </div>
    </>
  );
}