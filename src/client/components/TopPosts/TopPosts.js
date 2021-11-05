import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './TopPosts.scss';

export default function TopPosts({ articles }) {
  return (
    <div className='topPosts'>
      {articles.map((article) => {
        return article.id === 1 ? (
          <div className='topPost'>
            <Link className='topPost__link__top' to='/home'>
              <div className='topPost__link__top__thumbnail'>
                <img src={article.thumbnail} alt='Article thumbnail' />
              </div>
              <div className='topPost__link__top__details'>
                <div className='topPost__link__top__details__left'>
                  <div className='topPost__link__top__details__name'>
                    {article.title}
                  </div>
                  <div className='topPost__link__details__info'>
                    <span className='topPost__link__details__info__name'>
                      {article.categoryName}&nbsp;&nbsp;
                    </span>
                    <span className='topPost__link__details__info__date'>
                      / {moment(article.date).format('MMM DD, YYYY')}
                    </span>
                  </div>
                </div>
                <div className='topPost__link__top__details__right'>
                  {article.id}
                </div>
              </div>
            </Link>
            <hr />
          </div>
        ) : (
          <div className='topPost' key={article.id}>
            <Link className='topPost__link' to='/home'>
              <div className='topPost__link__thumbnail'>
                <img src={article.thumbnail} alt='Article thumbnail' />
              </div>
              <div className='topPost__link__details'>
                <div className='topPost__link__details__left'>
                  <div className='topPost__link__details__name'>
                    {article.title}
                  </div>
                  <div className='topPost__link__details__info'>
                    <span className='topPost__link__details__info__name'>
                      {article.categoryName}&nbsp;&nbsp;
                    </span>
                    <span className='topPost__link__details__info__date'>
                      / {moment(article.date).format('MMM DD, YYYY')}
                    </span>
                  </div>
                </div>
                <div className='topPost__link__details__right'>
                  {article.id}
                </div>
              </div>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
