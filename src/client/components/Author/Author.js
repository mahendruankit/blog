import React from 'react';
import moment from 'moment';
import Social from '../../components/Social/Social';
import './Author.scss';

export default function Author({
  name,
  image,
  publishingDate,
  readTime,
  social,
  writtenBy,
}) {
  return (
    <div className='author'>
      <div className='author__picture'>
        <img src={image} alt='Author'></img>
      </div>
      <div className='author__details'>
        {writtenBy ? (
          <div className='author__details__writtenBy'>WRITTEN BY</div>
        ) : (
          ''
        )}
        <div className='author__details__name'>{name}</div>
        <div className='author__details__article'>
          <span> {moment(publishingDate).format('MMM DD, YYYY')}</span>
          <span> - </span>
          <span>{readTime} mins read</span>
        </div>
      </div>
      <div className='author__social'>{social ? <Social /> : ''}</div>
    </div>
  );
}
