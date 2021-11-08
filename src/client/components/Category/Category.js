import React from 'react';
import Title from '../../components/Title/Title';
import Categories from '../../../CategoriesData';
import Advertisment from '../../components/Advertisment/Advertisment';
import Articles from '../../components/Articles/Articles';
import TopPosts from '../../components/TopPosts/TopPosts';
import moment from 'moment';

import './Category.scss';

export default function Category({
  categoryId,
  displayTitle,
  requiresPadding,
}) {
  let topPostsArticlesFromAllCategories = [];
  var category = Categories.filter((c) => c.id === categoryId)[0];
  var articles = category.articles;

  var listOfCategoriesAndArticles = {
    category: category,
    articles: articles,
  };

  //Calculate the top articles as per claps from all categories

  Categories.forEach((category) => {
    category.articles.forEach((article) => {
      topPostsArticlesFromAllCategories.push({
        category: category,
        article: article,
        claps: article.claps,
      });
    });
  });

  let topPosts = topPostsArticlesFromAllCategories.sort((a, b) => {
    return moment(a.claps).diff(b.claps);
  });

  topPosts = topPosts.reverse().slice(0, 3);

  let contentClass = requiresPadding ? 'content' : '';

  return (
    <div className={`category ${contentClass}`}>
      <div className='category__left'>
        {displayTitle ? <Title title={category.name} /> : ''}
        <Articles listOfCategoriesAndArticles={listOfCategoriesAndArticles} />
      </div>
      <div className='category__right'>
        <Title title='Top Posts' />
        <TopPosts listOfCategoriesAndArticles={topPosts} />
        <Advertisment />
      </div>
    </div>
  );
}
