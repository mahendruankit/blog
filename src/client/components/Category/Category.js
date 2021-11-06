import React from 'react';
import Title from '../../components/Title/Title';
import Categories from '../../../CategoriesData';
import Advertisment from '../../components/Advertisment/Advertisment';
import Articles from '../../components/Articles/Articles';
import TopPosts from '../../components/TopPosts/TopPosts';
import moment from 'moment';

import './Category.scss';

export default function Category({ categoryId }) {
  let categoryAndArticlesFromAllCategories = [];
  var category = Categories.filter((c) => c.id === categoryId)[0];
  var articles = category.articles;

  var listOfCategoriesAndArticles = {
    category: category,
    articles: articles,
  };

  //Calculate the latest articles from all categories

  Categories.forEach((category) => {
    category.articles.forEach((article) => {
      categoryAndArticlesFromAllCategories.push({
        category: category,
        article: article,
        date: moment(article.date).format('MMM DD, YYYY'),
      });
    });
  });

  let latestArticlesFromAllCategories =
    categoryAndArticlesFromAllCategories.sort((a, b) => {
      return moment(a.date).diff(b.date);
    });

  latestArticlesFromAllCategories = latestArticlesFromAllCategories
    .reverse()
    .slice(0, 3);

  return (
    <div className='content'>
      <div className='category'>
        <div className='category__left'>
          <Title title={category.name} />
          <Articles listOfCategoriesAndArticles={listOfCategoriesAndArticles} />
        </div>
        <div className='category__right'>
          <Title title='Top Posts' />
          <TopPosts
            listOfCategoriesAndArticles={latestArticlesFromAllCategories}
          />
          <Advertisment />
        </div>
      </div>
    </div>
  );
}
