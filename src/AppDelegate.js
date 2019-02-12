// @flow strict

import * as React from 'react';
import { withRouter } from 'react-router-dom';

import App from './App';

// TODO - add additional auth logic

class AppDelegate extends React.Component<RouterProps> {
    render() {

        return (
            <App {...this.props} />      
        );
    }
}

export default withRouter(AppDelegate);