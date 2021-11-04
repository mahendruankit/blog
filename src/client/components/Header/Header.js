import React from 'react';
import Navbar from '../Navbar/Navbar';

import './Header.scss';

export default function Header({ backgroundColor, ...props }) {
  return (
    <header
      className='header'
      {...props}
      style={backgroundColor && { backgroundColor }}
    >
      <div className='header__title'>
        <span className='header__title1'>The</span>
        <span className='header__title2'>Siren</span>
      </div>

      <div className='header navbar'>
        <Navbar />
      </div>
      <hr />
    </header>
  );
}
