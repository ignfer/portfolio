import './main.css';

import {useState} from 'react';

import Blog from '../blog/blog';
import Education from '../education/education';
import Endorsement from '../endorsement/endorsement';
import Experience from '../experience/experience';
import NavBar from '../nav-bar/nav-bar';

export default function Main() {
  const tabs = {
    EXPERIENCE: {
      label: 'EXPERIENCE',
      component: <Experience/>
    },
    EDUCATION: {
      label: 'EDUCATION',
      component: <Education/>
    },
    ENDORSEMENT: {
      label: 'ENDORSEMENT',
      component: <Endorsement/>
    },
    BLOG: {
      label: 'BLOG',
      component: <Blog/>
    }
  };
  const [selectedTab, setSelectedTab] = useState(tabs.EXPERIENCE.label);

  return (
    <>
      <main className='main'>
        <NavBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabs={tabs}
        />
        {tabs[selectedTab]?.component || 'Oops, something went wrong :/'}
      </main>
    </>
  );
}