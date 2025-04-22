import './info.css';

import Contact from '../contact/contact.tsx';
import Logo from '../logo/logo.js';
import ProfilePicture from '../profile-picture/profile-picture';

export default function Info() {
  return (
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