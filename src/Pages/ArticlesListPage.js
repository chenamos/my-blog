import React from "react";
import ArticlesList  from "../Components/ArticlesList";
import articleContent from './article-content'

const ArticlesListPage = ({ articles }) => (
  <>
    <h1>Articles</h1>
    <ArticlesList articles = {articleContent}/>
  </>
);

export default ArticlesListPage;
