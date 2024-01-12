import './Main.css'

import Experience from '../Experience/Experience';
import TechStack from '../TechStack/TechStack';
import Education from '../Education/Education';
import Blog from '../Blog/Blog';

import { useState } from 'react';

import NavBar from '../NavBar/NavBar';

export default function Main(){
  const [selectedTab,setSelectedTab] = useState(1);

  return(
    <>
      <main className='main'>
        <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        
        {selectedTab === 1 ? <Experience/> : ''}
        {selectedTab === 2 ? <TechStack/> : ''}
        {selectedTab === 3 ? <Education/> : ''}
        {selectedTab === 4 ? <Blog/> : ''}
      </main>
    </>
  );
}