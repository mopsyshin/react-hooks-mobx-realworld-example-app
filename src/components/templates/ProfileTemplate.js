import React from 'react';
import ArticleList from 'components/organisms/article/ArticleList';
import TabMenu from 'components/organisms/tab-menu/TabMenu';

const ProfileTemplate = props => {

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img
                src="http://i.imgur.com/Qr71crq.jpg"
                alt="author profile"
                className="user-img"
              />
              <h4>{props.profile.username}</h4>
              <p>
                {props.profile.bio}
              </p>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-plus-round" />
                &nbsp; Follow {props.profile.username}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <TabMenu />
            <ArticleList />
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProfileTemplate;