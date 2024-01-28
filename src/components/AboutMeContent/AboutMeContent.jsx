import ReferenceCard from '../ReferenceCard/ReferenceCard';
import './AboutMeContent.css'
export default function AboutMeContent({tabIndex}){

  const referencesJSON = {
    'people' : [{
      'name' : 'Diego Villalba',
      'position' : 'System Developer at CargoNet',
      'description' : 'After working together on various projects it is with great confidence that I recommend Ignacio as a standout software developer. He exhibits a genuine passion for their craft and he is  on continuous pursuit of learning from peers. I highly endorse Ignacio as a valuable team member.',
      'site' : 'https://www.linkedin.com/in/diego-villalba-9426321b8/'
      },{
      'name' : 'Alexis Velázquez',
      'position' : 'Customer Support Specialist at Netuy',
      'description' : 'I\'ve partnered up with Ignacio on various development projects, and I\'d like to recommend him as a great teammate for his soft skills. He is very disciplined, organized, and consistent. Ignacio possesses excellent communication skills, quickly integrates himself into any team, and always seeks to understand projects as a whole. This leads him to ask for help when needed and to continually try to learn from others. His presence greatly boosts team cohesion, and he is always ready to help a teammate.',
      'site' : 'https://www.linkedin.com/in/alexis-velazquez-perazzo/'
      }
    ]
  };
  
  return(
    <>
      <section className='about-me-content'>
        <div className={tabIndex === 1 ? 'active-tab' : 'tab'}>
          <p>
            Hello! I&apos;m Ignacio, a <strong>22 years old software developer residing in Uruguay. </strong>
            For over <strong>7 years,</strong> I&apos;ve been building expertise in the field 
            of <strong>computer science</strong>. Currently I&apos;ve completly finished my second
            year on my <strong>Computer Science Technologist degree with a GPA of 4.6 </strong> 
            and I&apos;m looking forward to take part on real and impactful projects.
          </p> 

          <p>
            <strong>Here in my portfolio</strong> you will be able to discover my journey and to understand 
            it through the <strong>projects I&apos;ve acomplished. </strong>My focus is to achieve and
            to get knowledge through the gaining of experience on <strong>real life projects or 
            situations</strong> and applying that knowledge on <strong>quality projects,
            understanding the &apos;why&apos; behind things.</strong>
          </p> 

          <p>
            I&apos;ve found my mission and passion <strong>seeking excelence in software development. </strong>
            I appreciate surrounding myself with a team of experts from different areas to learn and 
            enhance my skills at a <strong>quick pace</strong>.
          </p>
        </div>

        <div className={tabIndex === 2 ? 'active-tab' : 'tab'}>
          
          <p>
            Throughout my career, I have tackled a variety of areas, making myself <strong>a developer 
            capable of carrying out end-to-end development. </strong>
          </p>

          <p>
            I&apos;m comfortable and I have experience <strong>creating responsive UI&apos;s 
            , creating my own styles</strong>, planning <strong>the frontend&apos;s layout from scratch</strong>
            or <strong>replicating a design into a real and functional prototype or project. </strong>
            Also I have experience <strong>creating a backend</strong> able to achieve the 
            <strong>business logic needed</strong>, I&apos;ve worked for years with 
            a heavily <strong>OOP focus</strong>, and also I&apos;m experienced on
            working with <strong>REST or SOAP APIs.</strong>
          </p>

          <p>
            I enjoy taking on projects beyond my current abilities because I believe <strong>they are the ones 
            that offer the greatest progress.</strong>
          </p>

        </div>

        <div className={tabIndex === 3 ? 'active-tab' : 'tab'}>
          <p>Recommendations from professionals who have worked with me on past or ongoing projects.</p>
          {referencesJSON.people.map((person,index) =>{
            return <ReferenceCard key={index} person={person}/>
          })}
        </div>

      </section>
    </>
  );
}