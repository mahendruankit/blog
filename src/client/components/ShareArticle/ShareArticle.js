import React from 'react';
import { FaShareAlt } from 'react-icons/fa';
import './ShareArticle.scss';

export default function ShareArticle() {
  return (
    <div className='shareArticle'>
      <span className='shareArticle__icon'>
        <FaShareAlt />
      </span>
      <span className='shareArticle__text'>Share this article</span>
    </div>
  );
}
