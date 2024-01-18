import './AboutMeContent.css'
export default function AboutMeContent({tabIndex}){
  return(
    <>
      <section className='about-me-content'>
         <div className={tabIndex === 1 ? 'active-tab' : 'tab'}>
            <p>
              Hey! I&apos;m Ignacio, currently 22 years old, and I am a software developer residing in Uruguay. For over 7 years, 
              I&apos;ve been building expertise in the field of computer science. My mission and passion lie in software development. 
              I appreciate surrounding myself with experts from different areas to learn and enhance my skills at a good pace
            </p> 
            
            <p>
              My focus is on learning and applying that knowledge to quality projects, understanding the &apos;why&apos;
              behind things, and striving to provide development that seeks excellence in all areas. I love taking on 
              projects beyond my current abilities because I believe they are the ones that offer the greatest progress.
            </p>
            
            <p>
              Part of my daily routine is consuming information about new technologies and trends since this industry is 
              constantly changing. Throughout my career, I have tackled a variety of areas, making myself a developer
              capable of carrying out end-to-end development.
            </p>
            
        </div>

        <div className={tabIndex === 2 ? 'active-tab' : 'tab'}>
          <p>
            placeholder p
          </p>
        </div>

        <div className={tabIndex === 3 ? 'active-tab' : 'tab'}>
          <p>
            placeholder p
          </p>
        </div> 
         
      </section>
    </>
  );
}