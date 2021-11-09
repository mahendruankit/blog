import React, { useState } from 'react';
import moment from 'moment';
import './ArticleGallery.scss';

export default function ArticleGallery({ listOfCategoriesAndArticles }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='articleGallery__container'>
      {listOfCategoriesAndArticles.map((list, index) => {
        let id = index + 1;
        return (
          <input
            type='radio'
            id={`radio__${id}`}
            className='articleGallery__article__radio'
            name={'images'}
            defaultChecked={id === 1 ? !isChecked : isChecked}
            onChange={handleOnChange}
          />
        );
      })}

      {listOfCategoriesAndArticles.map((list, index) => {
        let id = index + 1;
        return (
          <div
            className='articleGallery__article'
            id={`article__${id}`}
            key={index}
          >
            <div
              className='articleGallery__article__img'
              style={{ backgroundImage: `url(${list.article.thumbnail})` }}
            >
              <label
                for={
                  id === 1
                    ? `radio__${listOfCategoriesAndArticles.length}`
                    : `radio__${id - 1}`
                }
                className='articleGallery__article__prev'
              >
                <i class='arrow left'></i>
              </label>
              <label
                for={
                  id === listOfCategoriesAndArticles.length
                    ? `radio__${1}`
                    : `radio__${id + 1}`
                }
                className='articleGallery__article__next'
              >
                <i class='arrow right'></i>
              </label>

              <div className='articleGallery__article__img__details'>
                <h1>{list.article.title} </h1>
                <span>{list.category.name} / </span>
                <span>{moment(list.article.date).format('MMM DD, YYYY')} </span>
              </div>
            </div>
          </div>
        );
      })}
      <div className='articleGallery__nav'>
        {listOfCategoriesAndArticles.map((index) => {
          let id = index + 1;
          return (
            <label
              for={`radio__${id}`}
              className='articleGallery__dot'
              id={`articleGallery__dot__${id}`}
            ></label>
          );
        })}
      </div>
    </div>
  );
}
