import Contact from '../Contact/Contact.jsx';
import ProfilePicture from '../ProfilePicture/ProfilePicture.jsx';
import Logo from '../Logo/Logo.jsx';

import './Info.css'
export default function Info(){
  return(
    <>
      <section className='header-info-section'>
        <section className='header-pfp-contact-section'>
            <ProfilePicture/>
            <Contact/>
        </section>
        <Logo/>
      </section>
    </>
  );
}