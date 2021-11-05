import React from 'react';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Categories from '../../../Categories';
import Articles from '../../components/Articles/Articles';

import './Food.scss';

export default function Food() {
  var category = Categories.filter((c) => c.id === 5)[0];
  var techArticles = category.articles;
  return (
    <div className='content food'>
      <CategoryTitle title={category.name} />
      <Articles category={category} articles={techArticles} />
    </div>
  );
}
