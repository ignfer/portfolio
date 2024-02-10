import './Main.css'

import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Endorsement from '../Endorsement/Endorsement';

import { useState } from 'react';

import NavBar from '../NavBar/NavBar';

export default function Main(){
  const [selectedTab,setSelectedTab] = useState(1);

  return(
    <>
      <main className='main'>
        <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        
        {selectedTab === 1 ? <Experience/> : ''}
        {selectedTab === 2 ? <Education/> : ''}
        {selectedTab === 3 ? <Endorsement/> : ''}
      </main>
    </>
  );
}