import React from 'react';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Categories from '../../../Categories';
import Advertisment from '../../components/Advertisment/Advertisment';
import Articles from '../../components/Articles/Articles';
import TopPosts from '../../components/TopPosts/TopPosts';

import './Technology.scss';

export default function Technology() {
  var category = Categories.filter((c) => c.id === 2)[0];
  var techArticles = category.articles;
  return (
    <div className='content'>
      <div className='technology'>
        <div className='technology__left'>
          <CategoryTitle title={category.name} />
          <Articles category={category} articles={techArticles} />
        </div>
        <div className='technology__right'>
          <CategoryTitle title='Top Posts' />
          <TopPosts category={category} articles={techArticles} />
          <Advertisment />
        </div>
      </div>
    </div>
  );
}
