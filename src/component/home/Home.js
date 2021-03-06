// @flow strict

import * as React from 'react';

// Are these being used ?
// import styled from 'styled-components';
// import { darken } from 'polished';
// import { media } from 'common/Breakpoints';

import { Header } from 'common/styled/exports';
import ModuleList from 'component/common/ModuleList';

type Props = {||};

function Home(props: Props) {
    return (
        <div>
            <Header>Home</Header>
            <ModuleList type='home' />
        </div> 
    );
}

export default Home;
