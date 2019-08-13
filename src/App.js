import React, { useEffect, useContext } from "react";
import { Route } from 'react-router-dom';
import { Home, Article, CreateArticle, EditArticle, Register, Login, Profile, Settings } from 'pages';
import GnbHeader from 'components/organisms/header/Header';
import GnbFooter from 'components/organisms/footer/Footer';
import "./App.css";
import { UserStore } from "stores/index";

const App = () => {
  const userStore = useContext(UserStore);

  useEffect(() => {
    userStore.getCurrentUser();
  }, [])

  return (
    <div>
      <Route path="/" component={GnbHeader}/>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
      <Route path="/articles/:slug" component={Article} />
      <Route path="/create-article" component={CreateArticle} />
      <Route path="/edit-article" component={EditArticle} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/profile/:username" component={Profile} />
      <Route path="/" component={GnbFooter}/>
    </div>
  )
}

export default App;
