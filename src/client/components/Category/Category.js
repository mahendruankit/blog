import React from 'react';
import Title from '../../components/Title/Title';
import Categories from '../../resources/CategoriesData';
import Advertisment from '../../components/Advertisment/Advertisment';
import Articles from '../../components/Articles/Articles';
import TopPosts from '../../components/TopPosts/TopPosts';
import ArticleGallery from '../ArticleGallery/ArticleGallery';
import moment from 'moment';

import './Category.scss';

export default function Category({
  categoryId,
  displayTitle,
  requiresPadding,
  requiresArticleGallery,
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

  let topPosts = topPostsArticlesFromAllCategories
    .sort((a, b) => {
      return moment(a.claps).diff(b.claps);
    })
    .reverse()
    .slice(0, 4);

  //Calculate latest articles from Category 2

  let latestArticlesFromCategory2 = [];

  var categoryTwo = GetCategoryFromId(2);
  categoryTwo.articles.forEach((article) => {
    latestArticlesFromCategory2.push({
      category: category,
      article: article,
      date: moment(article.date).format('MMM DD, YYYY'),
    });
  });

  latestArticlesFromCategory2 = latestArticlesFromCategory2
    .sort((a, b) => {
      return moment(a.date).diff(b.date);
    })
    .reverse();

  function GetCategoryFromId(id) {
    return Categories.find((c) => c.id === id);
  }

  console.log(categoryTwo.articles);

  let contentClass = requiresPadding ? 'content' : '';

  return (
    <div className={`${contentClass}`}>
      <div className='category'>
        <div className='category__left'>
          {displayTitle ? <Title title={category.name} /> : ''}
          <Articles listOfCategoriesAndArticles={listOfCategoriesAndArticles} />
          {requiresArticleGallery ? (
            <ArticleGallery
              listOfCategoriesAndArticles={latestArticlesFromCategory2}
            />
          ) : (
            ''
          )}
        </div>
        <div className='category__right'>
          <Title title='Top Posts' />
          <TopPosts listOfCategoriesAndArticles={topPosts} />
          <Advertisment />
        </div>
      </div>
    </div>
  );
}
