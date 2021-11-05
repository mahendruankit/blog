import React from 'react';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Categories from '../../../Categories';
import Articles from '../../components/Articles/Articles';

import './Science.scss';

export default function Science() {
  var category = Categories.filter((c) => c.id === 1)[0];
  var techArticles = category.articles;
  return (
    <div className='content technology'>
      <CategoryTitle title={category.name} />
      <Articles category={category} articles={techArticles} />
    </div>
  );
}
