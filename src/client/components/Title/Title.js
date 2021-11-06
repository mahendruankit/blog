import React from 'react';
import './Title.scss';

export default function Title({ title }) {
  return (
    <div className='title'>
      {title}
      <hr />
    </div>
  );
}
