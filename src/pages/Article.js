import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { ArticleStore } from "stores/index";
import ArticleTemplate from "components/templates/ArticleTemplate";

const Article = observer(props => {
  const articleStore = useContext(ArticleStore);
  const article = articleStore.currentArticle;

  useEffect(() => {
    const slug = props.match.params.slug;
    articleStore.getCurrentArticle(slug);
    return articleStore.clearArticle();
  }, []);

  return (
    <ArticleTemplate article={article}/>
  );
});

export default Article;
