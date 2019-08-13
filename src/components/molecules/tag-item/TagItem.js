import React from "react";

const TagItem = props => {
  return (
    <span className="tag-pill tag-default" onClick={props.onClick}>
      {props.tagName}
    </span>
  );
};

export default TagItem;
