import React from 'react';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Categories from '../../../CategoriesData';
import TopPostsData from '../../../TopPostsData';
import Advertisment from '../../components/Advertisment/Advertisment';
import Articles from '../../components/Articles/Articles';
import TopPosts from '../../components/TopPosts/TopPosts';

import './Technology.scss';

export default function Technology() {
  var category = Categories.filter((c) => c.id === 2)[0];
  var techArticles = category.articles;
  var topPostArticles = TopPostsData[0].articles;
  return (
    <div className='content'>
      <div className='technology'>
        <div className='technology__left'>
          <CategoryTitle title={category.name} />
          <Articles category={category} articles={techArticles} />
        </div>
        <div className='technology__right'>
          <CategoryTitle title='Top Posts' />
          <TopPosts articles={topPostArticles} />
          <Advertisment />
        </div>
      </div>
    </div>
  );
}
