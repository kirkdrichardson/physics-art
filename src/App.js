// @flow

import * as React from 'react';
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
  DeviceEnums,
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
  },
  {
    path: '/test',
    component: Test,
    exact: true,
    sidebar: {
      name: 'Systems',
      icon: 'test'
    }
  }
];

// We modify the style at these breakpoints
const BreakPoint = {
  DESKTOP: 1600,
  TABLET: 800,
  MOBILE: 400
};

type State = {
  screenWidth: number,
  screenHeight: number,
  device: string // we default style to a Desktop layout
}


class App extends React.Component<RouterProps, State> {
  state = {
    screenWidth: 1600,
    screenHeight: 900,
    device: DeviceEnums.DESKTOP // we default style to a Desktop layout
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  // update device type if screen dimensions don't match the default
  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.screenHeight !== this.state.screenHeight
        || prevState.screenWidth !== this.state.screenWidth) {
     
      const device = this.getDevice(this.state.screenWidth, this.state.screenHeight);
      
      // safety check
      if (device) {
        this.setState({device});
      }
    }
  }

  updateWindowDimensions = (): void => {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    });
  }

  getDevice = (w: number, h: number): string => {
    if (w <= BreakPoint.MOBILE) {
      return DeviceEnums.MOBILE;
    } else if (w <= BreakPoint.TABLET) {
      return DeviceEnums.TABLET;
    } else {
      return DeviceEnums.DESKTOP;
    }
  }

  render() {
    // const { device } = this.state;
    
    console.log(`w: ${this.state.screenWidth} || h: ${this.state.screenHeight}`);

    return (
        <AppContainer>
            <Header routes={routes} {...this.props} />
            <MainContent>
              <Page>
                <Switch>
                      {routes.map(route => 
                          <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            {...this.props}
                            exact={route.exact} />
                      )}
                    <Route path='/' component={NoMatchingRoute} />
                  </Switch>
              </Page>
            </MainContent>
        </AppContainer>        
    );
  }
}


export default App;
