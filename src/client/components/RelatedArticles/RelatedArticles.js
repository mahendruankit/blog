import React from 'react';
import { Link } from 'react-router-dom';
import Author from '../../components/Author/Author';
import './ReactedArticles.scss';

export default function RelatedArticles({ listOfCategoriesAndArticles }) {
  return (
    <div className='relatedArticles'>
      <div className='relatedArticles__title'>More From The Siren</div>
      <hr />

      <div className='relatedArticlesFromAllCategories'>
        {listOfCategoriesAndArticles.articles.map((article, index) => {
          const newTo = {
            pathname: `/category/${listOfCategoriesAndArticles.category.id}/article/${article.id}`,
            param1: 'id',
          };

          return (
            <div
              className='relatedArticlesFromAllCategories__article'
              key={`${article.id}${listOfCategoriesAndArticles.category.id}`}
            >
              {index === 0 ? (
                <div className='relatedArticlesFromAllCategories__article__tag'>
                  Also tagged: {article.tags}
                </div>
              ) : (
                <div className='relatedArticlesFromAllCategories__article__tag'>
                  Relates reads
                </div>
              )}
              <Link
                className='relatedArticlesFromAllCategories__article__link'
                to={newTo}
              >
                <div className='relatedArticlesFromAllCategories__article__link__details'>
                  <div className='relatedArticlesFromAllCategories__article__link__details__thumbnail'>
                    <img src={article.thumbnail} alt='Article thumbnail' />
                  </div>
                  <div className='relatedArticlesFromAllCategories__article__link__details__name'>
                    {article.title}
                  </div>
                  <div className='relatedArticlesFromAllCategories__article'>
                    <Author
                      name={article.author}
                      image={article.authorImage}
                      publishingDate={article.date}
                      readTime={article.minutes}
                      social={false}
                      writtenBy={false}
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
