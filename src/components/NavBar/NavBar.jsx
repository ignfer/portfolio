import './NavBar.css'

import ToggleButtons from '../ToggleButtons/ToggleButtons';

export default function NavBar(){
  return(
    <>
      <ul className='navbar'>
        <li className='selected'>MY WORK</li>
        <li>TECH STACK</li>
        <li>EDUCATION</li>
        <ToggleButtons/>
      </ul>
      
    </>
  );
}