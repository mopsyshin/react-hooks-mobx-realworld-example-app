import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { CommonStore } from 'stores/index';

const ErrorList = observer(props => {
  const commonStore = useContext(CommonStore);

  const errorList = () => {
    if (commonStore.errorList.length > 0) {
      return commonStore.errorList.map((error, index) => {
        return <li key={index}>{error}</li>
      });
    }
    return;
  }

  return (
    <ul className="error-messages">
      {errorList()}
    </ul>
  )
})

export default ErrorList;