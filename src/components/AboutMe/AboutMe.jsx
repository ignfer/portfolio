import AboutMeHeader from '../AboutMeHeader/AboutMeHeader.jsx';
import AboutMeContent from '../AboutMeContent/AboutMeContent.jsx';

import './AboutMe.css'
export default function AboutMe(){
  return(
    <>
     <section className='about-me-section'>
        <AboutMeHeader/>
        <AboutMeContent/>
      </section>
    </>
  );
}