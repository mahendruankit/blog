import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../../../CategoriesData';
import Author from '../../components/Author/Author';
import Tags from '../../components/Tags/Tags';
import Claps from '../../components/Claps/Claps';
import ShareArticle from '../../components/ShareArticle/ShareArticle';
import './Article.scss';

export default function Article() {
  let { categoryId } = useParams();
  let { articleId } = useParams();

  let cId = parseInt(categoryId);
  let aId = parseInt(articleId);

  var category = Categories.filter((c) => c.id === cId)[0];
  var article = category.articles.filter((a) => a.id === aId)[0];

  return (
    <div className='content'>
      <div className='article'>
        <div className='article__left'>
          <div className='article__left__container'>
            <Claps claps={article.claps} />
            <ShareArticle />
          </div>
        </div>

        <div className='article__centre'>
          <div className='article__centre__title'> {article.title}</div>
          <Author
            name={article.author}
            image={article.authorImage}
            publishingDate={article.date}
            readTime={article.minutes}
            social={true}
            writtenBy={false}
          />
          <div className='article__centre__articleImage'>
            <img src={article.image} alt='Article Preview' />
          </div>
          <div className='article__centre__content'> {article.content}</div>
          <div className='article__centre__articleImage'>
            <img src={article.thumbnail} alt='Article Thumbnail' />
          </div>
          <Tags tags={article.tags} />
          <Claps claps={article.claps} />
          <hr />
          <Author
            name={article.author}
            image={article.authorImage}
            publishingDate={article.date}
            readTime={article.minutes}
            social={false}
            writtenBy={true}
          />
        </div>
        <div className='article__right'> </div>
      </div>
    </div>
  );
}
