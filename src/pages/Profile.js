import React, {useEffect, useContext, useState }from "react";
import { observer } from "mobx-react-lite";
import { ArticleStore, CommonStore, ProfileStore, UserStore } from "stores";
import ProfileTemplate from 'components/templates/ProfileTemplate';

const Profile = observer(props => {
  const articleStore = useContext(ArticleStore);
  const commonStore = useContext(CommonStore);
  const profileStore = useContext(ProfileStore);
  const userStore = useContext(UserStore);

  const profile = profileStore.currentProfile;
  const [isMyProfile, setIsMyProfile] = useState(false);
  
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

  const init = () => {
    if (props.match.params.username === userStore.currentUser.username) {
      setIsMyProfile(true);
    }
    commonStore.setTabMenus(tabMenus);
    profileStore.getProfile(props.match.params.username);
    articleStore.getArticleList({author: props.match.params.username});
  }

  useEffect(() => {
    init();
    return () => {
      articleStore.clearArticleList();
      profileStore.clearProfile();
    };
  }, [props.match.params, userStore.currentUser]);

  return (
    <ProfileTemplate profile={profile} isMyProfile={isMyProfile}/>
  );
});

export default Profile;
