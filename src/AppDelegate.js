// @flow strict

import * as React from 'react';
import { withRouter } from 'react-router-dom';

import App from './App';

// TODO - add additional auth logic

function AppDelegate(props: RouterProps) {
  return (
    <App {...props} />      
  );
}

export default withRouter(AppDelegate);
