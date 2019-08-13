import React from "react";

const BaseButton = props => {
  return (
    <button className={`btn btn-sm ${props.buttonClass}`}
            onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default BaseButton;
