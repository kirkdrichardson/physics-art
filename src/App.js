// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './component/common/Header';
import Home from 'component/home/Home';
import Shapes from 'component/shapes/Shapes';
import Color from 'component/color/Color';
import Motion from 'component/motion/Motion';
import Systems from 'component/systems/Systems';
import Test from 'component/test/Test';
import Numbers from 'component/number/Numbers';
import NoMatchingRoute from 'component/error/NoMatchingRoute';

// import styled from 'styled-components';
//
// import Color from 'common/Color';
// import Style from 'common/Style';

import {
  AppContainer,
  MainContent,
  Page
} from 'common/MainLayout';

const routes: RouteType[] = [
  {
    path: '/',
    component: Home,
    exact: true,
    sidebar: {
      name: 'Home',
      icon: 'home'
    }
  },
  {
    path: '/color',
    component: Color,
    exact: true,
    sidebar: {
      name: 'Color',
      icon: 'palette'
    }
  },
  {
    path: '/shapes',
    component: Shapes,
    exact: true,
    sidebar: {
      name: 'Shapes',
      icon: 'category'
    }
  },
  {
    path: '/motion',
    component: Motion,
    exact: true,
    sidebar: {
      name: 'Motion',
      icon: 'swap_calls'
    }
  },
  {
    path: '/systems',
    component: Systems,
    exact: true,
    sidebar: {
      name: 'Systems',
      icon: 'grain'
    }
  },
  {
    path: '/numbers',
    component: Numbers,
    exact: true,
    sidebar: {
      name: 'Numbers',
      icon: 'all_inclusive'
    }
  }
];

function App(props: RouterProps) {
  return (
    <AppContainer>
      <Header routes={routes} {...props} />
      <MainContent>
        <Page>
          <Switch>
            {routes.map(route =>
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                {...props}
                exact={route.exact} />
            )}
            <Route path='/' component={NoMatchingRoute} />
          </Switch>
        </Page>
      </MainContent>
    </AppContainer>        
  );
}

export default App;
