import React from 'react';
import NavItems from '../../../MenuItems';
import NavItem from './NavItem/NavItem';
import './Navbar.scss';

export default function Navbar() {
  return (
    <ul>
      <NavItem NavItems={NavItems}></NavItem>
    </ul>
  );
}
