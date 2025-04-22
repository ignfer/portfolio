import './header.css';

import React from 'react';

import AboutMe from '../about-me/about-me';
import Info from '../info/info.js';

export default function Header() {
  return (
    <header>
      <Info/>
      <AboutMe/>
    </header>
  );
}