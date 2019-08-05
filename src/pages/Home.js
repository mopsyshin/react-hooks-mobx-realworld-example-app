import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { FeedStore } from "stores";
import ArticlePreview from "components/article/ArticlePreview";
import TagItem from "components/tag-item/TagItem";

const Home = observer(props => {
  const feedStore = useContext(FeedStore);

  useEffect(() => {
    feedStore.getArticleList();
  }, []);

  const articleList = () => feedStore.articleList.map( (article, index) => {
    return <ArticlePreview data={article} key={index} />;
  })

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="./">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="./">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>
            {articleList()}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <TagItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
