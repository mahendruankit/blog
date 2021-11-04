import React from 'react';
import './Header.scss';

export default function Header({ backgroundColor, ...props }) {
  return (
    <header {...props} style={backgroundColor && { backgroundColor }}>
      <span className='header__title1'>The</span>
      <span className='header__title2'>Siren</span>
    </header>
  );
}
