import React from 'react';
import './Tags.scss';

export default function Tags({ tags }) {
  return (
    <div className='tags'>
      {tags.split(',').map((tag) => (
        <span className='tag' key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
