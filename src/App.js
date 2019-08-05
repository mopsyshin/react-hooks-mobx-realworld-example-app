import React from "react";
import { Route } from 'react-router-dom';
import { Home, Article, CreateArticle, EditArticle, Register, Login, Profile, Settings } from 'pages';
import GnbHeader from 'components/header/Header';
import GnbFooter from 'components/footer/Footer';
import "./App.css";

const App = () => {
  return (
    <div>
      <GnbHeader/>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
      <Route path="/article/:slug" component={Article} />
      <Route path="/create-article" component={CreateArticle} />
      <Route path="/edit-article" component={EditArticle} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <GnbFooter/>
    </div>
  )
}

export default App;
