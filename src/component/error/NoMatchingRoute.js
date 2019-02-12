// @flow strict

import * as React from 'react';

function NoMatchingRoute(props: RouterProps) {
    return (
        <div>
            No route matching "{this.props.location.pathname}"
        </div>
    );
}

export default NoMatchingRoute;