import React from 'react';
import Menus from '../../../Menu';
import NavItem from './NavItem/NavItem';
import './Navbar.scss';

export default function Navbar() {
  return (
    <ul>
      <NavItem NavItems={Menus}></NavItem>
    </ul>
  );
}
