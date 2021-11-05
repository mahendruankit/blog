import React from 'react';
import './CategoryTitle.scss';

export default function CategoryTitle({ title }) {
  return (
    <div className='categoryTitle'>
      {title}
      <hr />
    </div>
  );
}
