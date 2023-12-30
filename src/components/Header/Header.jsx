import Contact from '../Contact/Contact.jsx';
import ProfilePicture from '../ProfilePicture/ProfilePicture.jsx';
import AboutMeHeader from '../AboutMeHeader/AboutMeHeader.jsx';
import AboutMeContent from '../AboutMeContent/AboutMeContent.jsx';
import Logo from '../Logo/Logo.jsx';

import './Header.css'
export default function Header(){
    return(
        <>
            <header>
                <section className='header-info-section'>
                    <section className='header-pfp-contact-section'>
                        <ProfilePicture/>
                        <Contact/>
                    </section>
                    <Logo/>
                </section>

                <section className='header-about-me-section'>
                    <AboutMeHeader/>
                    <AboutMeContent/>
                </section>

            </header>
        </>
    );
}