import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import App from '../App';
import styled from 'styled-components';

const Root = props => {

  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

export default Root;