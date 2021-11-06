import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './Articles.scss';

export default function Articles({ category, articles }) {
  return (
    <div className='articles'>
      {articles.map((article) => {
        const newTo = {
          pathname: `/category/${category.id}/article/${article.id}`,
          param1: 'id',
        };

        return (
          <div className='article' key={article.id}>
            <Link className='article__link' to={newTo}>
              <div className='article__link__thumbnail'>
                <img src={article.thumbnail} alt='Article thumbnail' />
              </div>
              <div className='article__link__details'>
                <div className='article__link__details__name'>
                  {article.title}
                </div>
                <div className='article__link__details__content'>
                  {article.content.slice(0, 150)}
                </div>
                <div className='article__link__details__info'>
                  <span className='article__link__details__info__name'>
                    {category.name}&nbsp;&nbsp;
                  </span>
                  <span className='article__link__details__info__date'>
                    / {moment(article.date).format('MMM DD, YYYY')}
                  </span>
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
