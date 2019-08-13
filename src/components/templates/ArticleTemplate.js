import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import ArticleMeta from "components/organisms/article/ArticleMeta";
import CommentCard from "components/organisms/comment/CommentCard";
import CommentForm from "components/organisms/comment/CommentForm";

const ArticleTemplate = observer(props => {

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{props.article.title}</h1>

          <ArticleMeta
            type="article"
            article={props.article}
          />
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">{props.article.body}</div>
        </div>

        <hr />

        <div className="article-actions">
          <ArticleMeta
            type="article"
            article={props.article}
          />
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <CommentForm />

            <CommentCard />
            <CommentCard />
          </div>
        </div>
      </div>
    </div>
  )
})

export default ArticleTemplate;