import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import ArticleMeta from "components/organisms/article/ArticleMeta";
import CommentCard from "components/organisms/comment/CommentCard";
import CommentForm from "components/organisms/comment/CommentForm";
import { ArticleStore } from "stores/index";

const Article = observer(props => {
  const articleStore = useContext(ArticleStore);
  const article = articleStore.currentArticle;

  useEffect(() => {
    const slug = props.match.params.slug;
    articleStore.getCurrentArticle(slug);
    return articleStore.clearArticle();
  }, []);

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>

          <ArticleMeta
            needAction
            author={article.author}
            createdAt={article.createdAt}
          />
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">{article.body}</div>
        </div>

        <hr />

        <div className="article-actions">
          <ArticleMeta
            needAction
            author={article.author}
            createdAt={article.createdAt}
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
  );
});

export default Article;
