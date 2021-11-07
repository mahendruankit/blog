import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './FeaturedArticles.scss';

export default function featuredArticle({ featuredList }) {
  return (
    <div className='featuredArticles'>
      {featuredList.map((list) => {
        const newTo = {
          pathname: `/category/${list.category.id}/article/${list.article.id}`,
          param1: 'id',
        };
        return (
          <Link
            className='featuredArticles__article__link'
            to={newTo}
            key={list.category.id}
          >
            <div className='featuredArticle'>
              <div
                className='featuredArticle__thumbnail'
                style={{ backgroundImage: `url(${list.article.thumbnail})` }}
              >
                <div className='featuredArticle__details'>
                  <h1>{list.article.title}</h1>
                  <span>{list.category.name} / </span>
                  <span>
                    {moment(list.article.date).format('MMM DD, YYYY')}{' '}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
