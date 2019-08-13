import React from 'react';
import ArticleList from 'components/organisms/article/ArticleList';
import PopularTags from 'components/organisms/popular-tags/PopularTags';
import TabMenu from 'components/organisms/tab-menu/TabMenu';

const HomeTemplate = props => {
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
            <TabMenu />
            <ArticleList />
          </div>

          <div className="col-md-3">
            <PopularTags/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTemplate;