import './NavBar.css'

import ToggleButtons from '../ToggleButtons/ToggleButtons';

export default function NavBar(){
  return(
    <>
      <ul className='navbar'>
        <li>MY WORK</li>
        <li>TECH STACK</li>
        <li>EDUCATION</li>
        <li>BLOG</li>
        <ToggleButtons/>
      </ul>
      
    </>
  );
}