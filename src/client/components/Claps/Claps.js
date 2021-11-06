import React from 'react';
import { FaHandsWash } from 'react-icons/fa';
import './Claps.scss';

export default function Claps({ claps }) {
  return (
    <div className='claps'>
      <span className='claps__icon'>
        <FaHandsWash />
      </span>
      <span className='claps__count'> {claps}&nbsp;K </span>
    </div>
  );
}
