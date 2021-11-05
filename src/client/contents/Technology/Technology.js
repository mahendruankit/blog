import React from 'react';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Categories from '../../../Categories';
import Articles from '../../components/Articles/Articles';

import './Technology.scss';

export default function Technology() {
  var category = Categories.filter((c) => c.id === 2)[0];
  var techArticles = category.articles;
  return (
    <div className='content technology'>
      <CategoryTitle title={category.name} />
      <Articles category={category} articles={techArticles} />
    </div>
  );
}
