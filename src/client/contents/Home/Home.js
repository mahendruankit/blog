import React from 'react';
import FeaturedArticles from '../../components/FeaturedArticle/FeaturedArticles';
import ArticlesHorizontal from '../../components/ArticlesHorizontal/ArticlesHorizontal';
import Category from '../../components/Category/Category';
import moment from 'moment';
import Title from '../../components/Title/Title';
import Categories from '../../../CategoriesData';
import './Home.scss';

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

  let latestArticlesFromAllCategories = categoryAndArticlesFromAllCategories
    .sort((a, b) => {
      return moment(a.date).diff(b.date);
    })
    .reverse()
    .slice(0, 3);

  //Calculate latest articles from Category 3
  let latestArticlesFromCategory3 = [];

  var category = GetCategoryFromId(3);
  category.articles.forEach((article) => {
    latestArticlesFromCategory3.push({
      category: category,
      article: article,
      date: moment(article.date).format('MMM DD, YYYY'),
    });
  });

  latestArticlesFromCategory3 = latestArticlesFromCategory3
    .sort((a, b) => {
      return moment(a.date).diff(b.date);
    })
    .reverse();

  function GetCategoryFromId(id) {
    return Categories.find((c) => c.id === id);
  }
  return (
    <>
      <div className='content'>
        <div className='home'>
          <FeaturedArticles featuredList={featuredList} />
          <Title title='The Latest' />
          <ArticlesHorizontal
            listOfCategoriesAndArticles={latestArticlesFromAllCategories}
            showThumbnail={true}
            showBreak={false}
          />
          <Title title='Latest Articles' />
          <Category
            categoryId={1}
            displayTitle={false}
            requiresPadding={false}
            requiresArticleGallery={true}
          />
          <Title title='Latest Stories' />
          <div className='home__spacer'>
            <hr />
          </div>
          <ArticlesHorizontal
            listOfCategoriesAndArticles={latestArticlesFromCategory3}
            showThumbnail={false}
            showBreak={true}
          />
          <div className='home__spacer'>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
