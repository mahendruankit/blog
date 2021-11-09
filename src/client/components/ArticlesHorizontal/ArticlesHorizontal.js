import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './ArticlesHorizontal.scss';

export default function ArticlesHorizontal({
  listOfCategoriesAndArticles,
  showThumbnail,
}) {
  return (
    <div className='articlesHorizontal'>
      {listOfCategoriesAndArticles.map((list) => {
        const newTo = {
          pathname: `/category/${list.category.id}/article/${list.article.id}`,
          param1: 'id',
        };

        return (
          <div
            className='articlesHorizontal__article'
            key={`${list.article.id}${list.category.id}`}
          >
            <Link className='articlesHorizontal__article__link' to={newTo}>
              <div className='articlesHorizontal__article__link__details'>
                {showThumbnail ? (
                  <div className='articlesHorizontal__article__link__details__thumbnail'>
                    <img src={list.article.thumbnail} alt='Article thumbnail' />
                  </div>
                ) : (
                  ''
                )}
                <div className='articlesHorizontal__article__link__details__name'>
                  {list.article.title}
                </div>
                <div className='articlesHorizontal__article__details__content'>
                  {list.article.content.slice(0, 150)}
                </div>
                <div className='articlesHorizontal__article__details__info'>
                  <span className='articlesHorizontal__article__details__info__name'>
                    {list.category.name}&nbsp;&nbsp;
                  </span>
                  <span className='articlesHorizontal__article__details__info__date'>
                    / {moment(list.article.date).format('MMM DD, YYYY')}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
