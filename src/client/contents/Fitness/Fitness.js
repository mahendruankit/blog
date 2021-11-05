import React from 'react';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Categories from '../../../CategoriesData';
import TopPostsData from '../../../TopPostsData';
import Advertisment from '../../components/Advertisment/Advertisment';
import TopPosts from '../../components/TopPosts/TopPosts';
import Articles from '../../components/Articles/Articles';

import './Fitness.scss';

export default function Fitness() {
  var category = Categories.filter((c) => c.id === 4)[0];
  var techArticles = category.articles;
  var topPostArticles = TopPostsData[0].articles;
  return (
    <div className='content'>
      <div className='fitness'>
        <div className='fitness__left'>
          <CategoryTitle title={category.name} />
          <Articles category={category} articles={techArticles} />
        </div>
        <div className='fitness__right'>
          <CategoryTitle title='Top Posts' />
          <TopPosts articles={topPostArticles} />
          <Advertisment />
        </div>
      </div>
    </div>
  );
}
