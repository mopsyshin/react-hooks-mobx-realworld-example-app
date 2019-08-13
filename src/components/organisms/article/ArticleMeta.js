import React from "react";
import moment from "moment";

const ArticleMeta = props => {
  const actionButtons = () => (
    <span>
      <button className="btn btn-sm btn-outline-secondary">
        <i className="ion-plus-round" />
        &nbsp; Follow Eric Simons <span className="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-sm btn-outline-primary">
        <i className="ion-heart" />
        &nbsp; Favorite Post <span className="counter">(29)</span>
      </button>
    </span>
  );

  return (
    <div className="article-meta">
      <a href="./">
        <img src={props.author.image} alt={props.author.username} />
      </a>
      <div className="info">
        <a href="./" className="author">
          {props.author.username}
        </a>
        <span className="date">{moment(props.createdAt).fromNow()}</span>
      </div>
      {props.needAction ? actionButtons() : null}
    </div>
  );
};

export default ArticleMeta;
