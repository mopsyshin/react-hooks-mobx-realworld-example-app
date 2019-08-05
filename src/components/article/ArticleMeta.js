import React from "react";

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
        <img src="http://i.imgur.com/Qr71crq.jpg" alt="author profile" />
      </a>
      <div className="info">
        <a href="./" className="author">
          Eric Simons
        </a>
        <span className="date">January 20th</span>
      </div>
      {props.needAction ? actionButtons() : null }
    </div>
  );
};

export default ArticleMeta;
