import React from "react";
import { Link } from "react-router-dom";

const TagItem = props => {
  return (
    <span className="tag-pill tag-default">
      {props.tagName}
    </span>
  );
};

export default TagItem;
