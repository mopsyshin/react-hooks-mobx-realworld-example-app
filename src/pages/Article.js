import React from "react";
import { observer } from "mobx-react-lite";
import ArticleMeta from "components/article/ArticleMeta";
import CommentCard from "components/comment/CommentCard";
import CommentForm from "components/comment/CommentForm";

const Article = observer( props => {
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>How to build webapps that scale</h1>

          <ArticleMeta needAction/>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>
              Web development technologies have evolved at an incredible clip
              over the past few years.
            </p>
            <h2 id="introducing-ionic">Introducing RealWorld.</h2>
            <p>It's a great solution for learning how other frameworks work.</p>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <ArticleMeta needAction/>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <CommentForm/>

            <CommentCard/>
            <CommentCard/>

          </div>
        </div>
      </div>
    </div>
  );
});

export default Article;
