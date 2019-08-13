import React from "react";
import { Link } from "react-router-dom";
import ArticleMeta from "./ArticleMeta";
import TagItem from "components/molecules/tag-item/TagItem";

const ArticlePreview = props => {
  const tagList = () =>
    props.article.tagList.map((tag, index) => {
      return <TagItem tagName={tag} key={index} />;
    });

  return (
    <div className="article-preview">
      <ArticleMeta article={props.article} type='preview'/>
      <Link to={`/articles/${props.article.slug}`} className="preview-link">
        <h1>{props.article.title}</h1>
        <p>{props.article.body}</p>
        <span>Read more...</span>
        <ul className="tag-list">{tagList()}</ul>
      </Link>
    </div>
  );
};

export default ArticlePreview;
