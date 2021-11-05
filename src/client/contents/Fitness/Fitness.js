import React from 'react';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Categories from '../../../Categories';
import Articles from '../../components/Articles/Articles';

import './Fitness.scss';

export default function Fitness() {
  var category = Categories.filter((c) => c.id === 4)[0];
  var techArticles = category.articles;
  return (
    <div className='content fitness'>
      <CategoryTitle title={category.name} />
      <Articles category={category} articles={techArticles} />
    </div>
  );
}
