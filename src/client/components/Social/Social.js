import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import stringResource from '../../resources/strings';
import './Social.scss';

export default function Social({ className }) {
  return (
    <div className={`${className} social`}>
      <div className='social__item'>
        <a
          href={stringResource.blog.social.facebook}
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebook />
        </a>
      </div>
      <div className='social__item'>
        <a
          href={stringResource.blog.social.twitter}
          target='_blank'
          rel='noreferrer'
        >
          <FaTwitter />
        </a>
      </div>
      <div className='social__item'>
        <a
          href={stringResource.blog.social.instagram}
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram />
        </a>
      </div>
      <div className='social__item'>
        <a
          href={stringResource.blog.social.youtube}
          target='_blank'
          rel='noreferrer'
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}
