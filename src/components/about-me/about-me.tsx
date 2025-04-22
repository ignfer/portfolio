import './about-me.css';

import {useState} from 'react';

import AboutMeContent from '../about-me-content/about-me-content';
import AboutMeHeader from '../about-me-header/about-me-header';

export default function AboutMe() {
  const [tabIndex, setTabIndex] = useState(1);

  function handleIndexChange(index) {
    setTabIndex(index);
  }

  return (
    <>
      <section className='about-me-section'>
        <AboutMeHeader
          handleIndexChange={handleIndexChange}
          tabIndex={tabIndex}
        />
        <AboutMeContent
          tabIndex={tabIndex}
          handleIndexChange={handleIndexChange}
        />
      </section>
    </>
  );
}