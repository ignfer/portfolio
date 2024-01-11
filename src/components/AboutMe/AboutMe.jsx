import AboutMeHeader from '../AboutMeHeader/AboutMeHeader.jsx';
import AboutMeContent from '../AboutMeContent/AboutMeContent.jsx';

import './AboutMe.css'
import { useState } from 'react';
export default function AboutMe(){
  const [tabIndex, setTabIndex] = useState(1);

  function handleIndexChange(index){
    setTabIndex(index);
  }
  
  return(
    <>
     <section className='about-me-section'>
        <AboutMeHeader handleIndexChange={handleIndexChange} tabIndex={tabIndex}/>
        <AboutMeContent tabIndex={tabIndex}/>
      </section>
    </>
  );
}