import React, {useEffect, useContext}from "react";
import { observer } from "mobx-react-lite";
import { ArticleStore, CommonStore, ProfileStore } from "stores";
import ProfileTemplate from 'components/templates/ProfileTemplate';

const Profile = observer(props => {
  const articleStore = useContext(ArticleStore);
  const commonStore = useContext(CommonStore);
  const profileStore = useContext(ProfileStore);
  const profile = profileStore.currentProfile;

  const tabMenus = [
    {
      tabName: 'My Articles',
      key: 'myArticles',
      authRequired: false,
      isActive: true,
      onClick: key => { 
        commonStore.selectTabMenu(key);
        articleStore.getArticleList({author: props.match.params.username});
      },
    },
    {
      tabName: 'Favorited Articles',
      key: 'favorited',
      authRequired: false,
      isActive: false,
      onClick: key => { 
        commonStore.selectTabMenu(key);
        articleStore.getArticleList({favorited: props.match.params.username});
      },
    },
  ]

  useEffect(() => {
    commonStore.setTabMenus(tabMenus);
    profileStore.getProfile(props.match.params.username);
    articleStore.getArticleList({author: props.match.params.username});
    return () => {
      articleStore.clearArticleList();
      profileStore.clearProfile();
    };
  }, []);

  return (
    <ProfileTemplate profile={profile}/>
  );
});

export default Profile;
