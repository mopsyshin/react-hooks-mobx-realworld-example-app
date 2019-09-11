import React from 'react';
import ArticleList from 'components/organisms/article/ArticleList';
import TabMenu from 'components/organisms/tab-menu/TabMenu';

const ProfileTemplate = props => {
  const renderActionButton = () => {
    if (props.isMyProfile) {
      return (
        <button className="btn btn-sm btn-outline-secondary action-btn">
          <i className="ion-gear-a" />
            &nbsp; Edit Profile Settings
        </button>
      )
    } else {
      return (
        <button className="btn btn-sm btn-outline-secondary action-btn">
          <i className="ion-plus-round" />
            &nbsp; Follow {props.profile.username}
        </button>
      )
    }
  }

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img
                src={props.profile.image}
                alt="author profile"
                className="user-img"
              />
              <h4>{props.profile.username}</h4>
              <p>
                {props.profile.bio}
              </p>
              {renderActionButton()}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <TabMenu />
            </div>
            <ArticleList />
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProfileTemplate;