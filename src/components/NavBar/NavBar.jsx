import './NavBar.css'

import ToggleButtons from '../ToggleButtons/ToggleButtons';

export default function NavBar({selectedTab,setSelectedTab}){

  function handleClick(selectedTabIndex){
    setSelectedTab(selectedTabIndex)
  }

  return(
    <>
      <ul className='navbar'>
        <li className={selectedTab === 1 ? 'selected' : ''} onClick={()=>handleClick(1)}>EXPERIENCE</li>
        {/* <li className={selectedTab === 2 ? 'selected' : ''} onClick={()=>handleClick(2)}>STACK</li> */}
        <li className={selectedTab === 3 ? 'selected' : ''} onClick={()=>handleClick(3)}>EDUCATION</li>
        <span className='navbar-version'>v0.0.1</span>
      </ul> 
    </>
  );
}