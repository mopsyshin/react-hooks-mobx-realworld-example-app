import React from "react";
import { Link } from "react-router-dom";
import ArticleMeta from "./ArticleMeta";
import TagItem from "components/tag-item/TagItem";

const ArticlePreview = props => {

  const tagList = () => props.data.tagList.map((tag, index) => {
    return (
      <TagItem tagName={tag} key={index}/>
    )
  })

  return (
    <div className="article-preview">
      <ArticleMeta data={props.data.author}/>
      <Link to={`/article/${props.data.slug}`} className="preview-link">
        <h1>
          {props.data.title}
        </h1>
        <p>{props.data.body}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {tagList()}
        </ul>
      </Link>
    </div>
  );
};

export default ArticlePreview;
