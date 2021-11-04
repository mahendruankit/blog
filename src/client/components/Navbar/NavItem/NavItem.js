import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.scss';

export default function NavItem({ NavItems }) {
  return (
    <>
      {NavItems.map((item) => {
        return (
          <div className='navbar__item' key={item.id}>
            <li>
              <Link to={item.tolink}>{item.name}</Link>
            </li>
          </div>
        );
      })}
    </>
  );
}
