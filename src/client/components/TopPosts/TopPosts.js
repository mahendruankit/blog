import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './TopPosts.scss';

export default function TopPosts({ listOfCategoriesAndArticles }) {
  return (
    <div className='topPosts'>
      {listOfCategoriesAndArticles.map((list, index) => {
        let newTo = {
          pathname: `/category/${list.category.id}/article/${list.article.id}`,
          param1: 'id',
        };
        return index === 0 ? (
          <div
            className='topPost'
            key={`${list.article.id}${list.category.id}`}
          >
            <Link className='topPost__link__top' to={newTo}>
              <div className='topPost__link__top__thumbnail'>
                <img src={list.article.thumbnail} alt='Article thumbnail' />
              </div>
              <div className='topPost__link__top__details'>
                <div className='topPost__link__top__details__left'>
                  <div className='topPost__link__top__details__name'>
                    {list.article.title}
                  </div>
                  <div className='topPost__link__details__info'>
                    <span className='topPost__link__details__info__name'>
                      {list.category.name}&nbsp;&nbsp;
                    </span>
                    <span className='topPost__link__details__info__date'>
                      / {moment(list.article.date).format('MMM DD, YYYY')}
                    </span>
                  </div>
                </div>
                <div className='topPost__link__top__details__right'>
                  {list.article.id}
                </div>
              </div>
            </Link>
            <hr />
          </div>
        ) : (
          <div
            className='topPost'
            key={`${list.article.id}${list.category.id}`}
          >
            <Link className='topPost__link' to={newTo}>
              <div className='topPost__link__thumbnail'>
                <img src={list.article.thumbnail} alt='Article thumbnail' />
              </div>
              <div className='topPost__link__details'>
                <div className='topPost__link__details__left'>
                  <div className='topPost__link__details__name'>
                    {list.article.title}
                  </div>
                  <div className='topPost__link__details__info'>
                    <span className='topPost__link__details__info__name'>
                      {list.category.name}&nbsp;&nbsp;
                    </span>
                    <span className='topPost__link__details__info__date'>
                      / {moment(list.article.date).format('MMM DD, YYYY')}
                    </span>
                  </div>
                </div>
                <div className='topPost__link__details__right'>
                  {list.article.id}
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
