import React from 'react';
import FeaturedArticles from '../../components/FeaturedArticle/FeaturedArticles';
import LatestArticlesFromAllCategories from '../../components/LatestArticlesFromAllCategories/LatestArticlesFromAllCategories';
import moment from 'moment';
import Title from '../../components/Title/Title';
import Categories from '../../../CategoriesData';

export default function Home() {
  let featuredList = [];
  let categoryAndArticlesFromAllCategories = [];

  //Calculate the features articles

  Categories.forEach((category) => {
    category.articles.forEach((article) => {
      if (article.featured === true) {
        featuredList.push({ category: category, article: article });
      }
    });
  });

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
      <div className='home'>
        <FeaturedArticles featuredList={featuredList} />
        <Title title='The Latest' />
        <LatestArticlesFromAllCategories
          latestArticlesFromAllCategories={latestArticlesFromAllCategories}
        />
        <Title title='Latest Articles' />
        <Title title='Latest Stories' />
      </div>
    </div>
  );
}
