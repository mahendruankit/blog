import React from 'react';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Categories from '../../../CategoriesData';
import Advertisment from '../../components/Advertisment/Advertisment';
import Articles from '../../components/Articles/Articles';
import TopPosts from '../../components/TopPosts/TopPosts';

import './Category.scss';

export default function Category({ categoryId }) {
  var category = Categories.filter((c) => c.id === categoryId)[0];
  var articles = category.articles;
  return (
    <div className='content'>
      <div className='category'>
        <div className='category__left'>
          <CategoryTitle title={category.name} />
          <Articles category={category} articles={articles} />
        </div>
        <div className='category__right'>
          <CategoryTitle title='Top Posts' />
          <TopPosts category={category} articles={articles} />
          <Advertisment />
        </div>
      </div>
    </div>
  );
}
