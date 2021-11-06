import React from 'react';
import Title from '../../components/Title/Title';
import Categories from '../../../CategoriesData';
import Advertisment from '../../components/Advertisment/Advertisment';
import Articles from '../../components/Articles/Articles';
import TopPosts from '../../components/TopPosts/TopPosts';

import './Category.scss';

export default function Category({ categoryId }) {
  var category = Categories.filter((c) => c.id === categoryId)[0];
  var articles = category.articles;

  var listOfCategoriesAndArticles = {
    category: category,
    articles: articles,
  };

  return (
    <div className='content'>
      <div className='category'>
        <div className='category__left'>
          <Title title={category.name} />
          <Articles listOfCategoriesAndArticles={listOfCategoriesAndArticles} />
        </div>
        <div className='category__right'>
          <Title title='Top Posts' />
          <TopPosts listOfCategoriesAndArticles={listOfCategoriesAndArticles} />
          <Advertisment />
        </div>
      </div>
    </div>
  );
}
