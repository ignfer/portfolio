import './nav-bar.css';

import {version_number} from '../../utils/constants.ts';

type NavBarProps = {
  selectedTab: string
  setSelectedTab: Function
  tabs: object
}

export default function NavBar({selectedTab, setSelectedTab, tabs}: NavBarProps) {
  return (
    <ul className='navbar'>
      {
        Object.keys(tabs)?.map((tab, index) => (
          <li
            key={index}
            className={selectedTab === tab ? 'selected' : null}
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