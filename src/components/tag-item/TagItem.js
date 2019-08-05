import React from "react";
import { Link } from "react-router-dom";

const TagItem = props => {
  return (
    <Link to={`/home/${props.tagName}`} className="tag-pill tag-default">
      {props.tagName}
    </Link>
  );
};

export default TagItem;
