import './Main.css'

import Experience from '../Experience/Experience';
import Stack from '../Stack/Stack';
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
        {selectedTab === 2 ? <Stack/> : ''}
        {selectedTab === 3 ? <Education/> : ''}
      </main>
    </>
  );
}