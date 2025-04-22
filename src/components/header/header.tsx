import AboutMe from '../about-me/about-me.tsx';
import Info from '../Info/Info.jsx';

import './Header.css'

export default function Header() {
    return (
        <>
            <header>
                <Info/>
                <AboutMe/>
            </header>
        </>
    );
}