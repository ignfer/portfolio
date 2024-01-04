import AboutMe from '../AboutMe/AboutMe.jsx';
import Info from '../Info/Info.jsx';

import './Header.css'
export default function Header(){
  return(
    <>
      <header>
          <Info/>
          <AboutMe/>
      </header>
    </>
  );
}