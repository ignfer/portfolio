import './about-me.css';

import AboutMeContent from '../about-me-content/about-me-content';
import AboutMeHeader from '../about-me-header/about-me-header';

export default function AboutMe() {
  return (
    <section className='about-me-section'>
      <AboutMeHeader/>
      <AboutMeContent/>
    </section>
  );
}