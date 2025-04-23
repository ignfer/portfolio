import './nav-bar.css';

import React from 'react';

import {version_number} from '../../utils/constants.ts';

type NavBarProps = {
  selectedTab: string
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>
  tabs: object
}

export default function NavBar({selectedTab, setSelectedTab, tabs}: NavBarProps) {
  return (
    <ul className='navbar'>
      {
        Object.keys(tabs)?.map((tab, index) => (
          <li
            key={index}
            className={'w-full'}
            data-selected={selectedTab === tab}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </li>
        ))
      }
      <span className='navbar-version'>{version_number}</span>
    </ul>
  );
}