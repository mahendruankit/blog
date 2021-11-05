import React from 'react';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Categories from '../../../Categories';
import Articles from '../../components/Articles/Articles';

import './Movies.scss';

export default function Movies() {
  var category = Categories.filter((c) => c.id === 3)[0];
  var techArticles = category.articles;
  return (
    <div className='content movies'>
      <CategoryTitle title={category.name} />
      <Articles category={category} articles={techArticles} />
    </div>
  );
}
