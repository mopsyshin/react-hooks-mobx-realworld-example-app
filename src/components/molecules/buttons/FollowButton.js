import React from 'react';
import BaseButton from "./BaseButton";

const FollowButton = props => {
  switch (props.type) {
    case 'preview'
  }

  return (
    <BaseButton onClick={props.onClick}
                isActive={props.isActive}
                buttonClass="btn-outline-secondary">
      <i className="ion-plus-round" />
      &nbsp;Follow {props.username}&nbsp;
    </BaseButton>
  )
}

export default FollowButton; 