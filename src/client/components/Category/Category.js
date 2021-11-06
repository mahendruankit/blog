import React from 'react';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Categories from '../../../CategoriesData';
import TopPostsData from '../../../TopPostsData';
import Advertisment from '../../components/Advertisment/Advertisment';
import Articles from '../../components/Articles/Articles';
import TopPosts from '../../components/TopPosts/TopPosts';

import './Category.scss';

export default function Category({ categoryId }) {
  var category = Categories.filter((c) => c.id === categoryId)[0];
  var techArticles = category.articles;
  var topPostArticles = TopPostsData[0].articles;
  return (
    <div className='content'>
      <div className='category'>
        <div className='category__left'>
          <CategoryTitle title={category.name} />
          <Articles category={category} articles={techArticles} />
        </div>
        <div className='category__right'>
          <CategoryTitle title='Top Posts' />
          <TopPosts articles={topPostArticles} />
          <Advertisment />
        </div>
      </div>
    </div>
  );
}
