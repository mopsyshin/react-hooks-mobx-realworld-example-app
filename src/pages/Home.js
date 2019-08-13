import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { ArticleStore, CommonStore } from "stores";

import HomeTemplate from 'components/templates/HomeTemplate';

const Home = observer(props => {
  const articleStore = useContext(ArticleStore);
  const commonStore = useContext(CommonStore);

  const tabMenus = [
    {
      tabName: 'Your Feed',
      key: 'feed',
      authRequired: true,
      isActive: false,
      onClick: key => { 
        commonStore.selectTabMenu(key);
        articleStore.getFeed();
      },
    },
    {
      tabName: 'Global Feed',
      key: 'global',
      authRequired: false,
      isActive: true,
      onClick: key => { 
        commonStore.selectTabMenu(key);
        articleStore.getArticleList();
      },
    },
  ]

  useEffect(() => {
    commonStore.setTabMenus(tabMenus);
    articleStore.getArticleList();
    commonStore.getTagList();
    return () => articleStore.clearArticleList();
  }, []);

  return (
    <HomeTemplate />
  );
});

export default Home;
