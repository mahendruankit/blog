import React from 'react';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Categories from '../../../Categories';
import Advertisment from '../../components/Advertisment/Advertisment';
import TopPosts from '../../components/TopPosts/TopPosts';
import Articles from '../../components/Articles/Articles';

import './Movies.scss';

export default function Movies() {
  var category = Categories.filter((c) => c.id === 3)[0];
  var techArticles = category.articles;
  return (
    <div className='content'>
      <div className='science'>
        <div className='science__left'>
          <CategoryTitle title={category.name} />
          <Articles category={category} articles={techArticles} />
        </div>
        <div className='science__right'>
          <CategoryTitle title='Top Posts' />
          <TopPosts category={category} articles={techArticles} />
          <Advertisment />
        </div>
      </div>
    </div>
  );
}
