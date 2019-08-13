import React from "react";
import BaseButton from "./BaseButton";

const FavoriteButton = props => {
  return (
    <BaseButton onClick={props.onClick}
                isActive={props.isActive}
                buttonClass="btn-outline-primary">
      <i className="ion-heart" />                  
      &nbsp;Favorite Post&nbsp;
      <span className="counter">({props.count})</span>
    </BaseButton>
  );
};

export default FavoriteButton;
