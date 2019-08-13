import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import FavoriteButton from "components/molecules/buttons/FavoriteButton";
import FollowButton from "components/molecules/buttons/FollowButton";
import BaseButton from "components/molecules/buttons/BaseButton";

const ArticleMeta = props => {
  const toggleFavorite = () => {};

  const toggleFollow = () => {};

  const actionButtons = () => {
    switch (props.type) {
      case "preview":
        return (
          <BaseButton
            onClick={props.onClick}
            isActive={props.toggleFavorite}
            buttonClass="pull-xs-right btn-outline-primary"
          >
            <i className="ion-heart" />
          </BaseButton>
        );
      case "article":
        return (
          <span>
            <BaseButton
              onClick={props.onClick}
              isActive={props.isActive}
              buttonClass="btn-outline-secondary">
              <i className="ion-plus-round" />
              &nbsp;Follow {props.article.author.username}&nbsp;
            </BaseButton>
            &nbsp;&nbsp;
            <BaseButton
              onClick={props.onClick}
              isActive={props.toggleFavorite}
              buttonClass="btn-outline-primary">
              <i className="ion-heart" />
              &nbsp;Favorite Article&nbsp;
              <span className="counter">({props.article.favoritesCount})</span>
            </BaseButton>
          </span>
        );
      default:
        return;
    }
  };

  return (
    <div className="article-meta">
      <Link to={`/profile/${props.article.author.username}`}>
        <img
          src={props.article.author.image}
          alt={props.article.author.username}
        />
      </Link>
      <div className="info">
        <Link
          className="author"
          to={`/profile/${props.article.author.username}`}
        >
          {props.article.author.username}
        </Link>
        <span className="date">
          {moment(props.article.createdAt).fromNow()}
        </span>
      </div>
      {actionButtons()}
    </div>
  );
};

export default ArticleMeta;
