import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ArticleStore } from "stores";
import ArticlePreview from './ArticlePreview';

const ArticleList = observer(props => {
  const articleStore = useContext(ArticleStore);

  const articleList = () => {
    if (articleStore.articleListIsLoaded) {
      if (articleStore.articleList.length > 0) {
        return articleStore.articleList.map((article, index) => {
          return (
            <ArticlePreview data={article} key={index} />
          )
        })
      }
      return (
        <div className="article-preview">
          No articles are here... yet.
        </div>
      )
    }
    return (
      <div className="article-preview">
          Loading...
      </div>
    )
  }
  
  return (
    <div>
      {articleList()}
    </div>
  )
})

export default ArticleList;