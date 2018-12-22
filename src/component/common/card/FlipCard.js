// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Adapted from https://github.com/medelman17/Flexy-Flip-Cards

type State = {
  isCardFlipped: boolean
};

type Props = {
  flipperID?: string,
  children: React.Element<'div'>[],
  frontBackgroundColor?: string,
  frontContainerStyle?: {||},
  frontContentStyle?: {||},
  backBackgroundColor?: string,
  backContainerStyle?: {||},
  backContentStyle?: {||},
}


class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isCardFlipped: false,
    }
  }

  toggleIsCardFlipped(): void {
    this.setState((prevState: State): State => ({
      isCardFlipped: !prevState.isCardFlipped,
    }));
  }

  findAndSetCardFlipper(childComponent: React.Element<'div'>, flipperRefName: string) {
    // First, check to see whether the childComponent we are looking at
    // should be set as the card flipper. If so, we'll clone the child
    // using React.cloneElement, attach an onClick method to toggle 
    // this.state.isCardFlipped, and return our cloned element to be put
    // back in the tree. 
    if (childComponent.ref === flipperRefName) {
      return React.cloneElement(childComponent, {
        onClick: this.toggleIsCardFlipped.bind(this)
      });
    }
    // Now, because we want to traverse the entire child component tree,  
    // we need to check whether the child has children of its own. And, if 
    // so, we'll call findAndSetCardFlipper on the child (i.e., recursively). 
    // Before doing so, however, we will ensure that the child is a valid 
    // React object because our methodology relies on that being so. 
    else if (React.Children.count(childComponent) > 0 && React.isValidElement(childComponent)) { 
      return React.cloneElement(childComponent, {
        children: React.Children.map(
          childComponent.props.children, 
          grandchild =>
            this.findAndSetCardFlipper(grandchild, flipperRefName)
        ),
      });
    }
    // If componenetChild is neither destined to be the card flipper nor lucky
    // enough to have children of its own, we'll just return it to be put back
    // into the tree. 
    return childComponent;
  }

  render() {
    // Here, we'll take the children we were given as props and check to see which
    // of the lucky lads has been put in control of flipping the card. Note, 
    // React.Children.map returns an array. See https://reactjs.org/docs/react-api.html.  
    const children = React.Children.map(
      this.props.children, 
      child => this.findAndSetCardFlipper(child, this.props.flipperID || 'flipper')
    );

    return (
      <CardWrapper>
        {/* Since we're enforcing a strict 'two-child' policy, we will place the first
        child on the front of the card and the second child on the back. */}
        <CardSide
          cardRotation={this.state.isCardFlipped ? '180deg' : '0deg'}
          backgroundColor={this.props.frontBackgroundColor || '#1097FF'}
          containerStyle={this.props.frontContainerStyle || { }}
          contentStyle={this.props.frontContentStyle || { }}
        >
          {children[0]}
        </CardSide>
        <CardSide
          cardRotation={this.state.isCardFlipped ? '0deg' : '-180deg' }
          backgroundColor={this.props.backBackgroundColor || '##FF851B'}
          containerStyle={this.props.backContainerStyle || { }}
          contentStyle={this.props.backContentStyle || { }}
        >
          {children[1]}
        </CardSide>
      </CardWrapper>
    );
  }
}



const CardSideWrapper = styled.div`
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: ${props => props.backgroundColor ? props.backgroundColor : '#fff' };
  overflow: hidden;
  @-moz-document url-prefix() {
    overflow: visible;
  }
  backface-visibility: hidden;
  transition: all .7s ease;
  transform-style: preserve-3d;
  transform: ${props => `rotateY(${props.cardRotation})`};  
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;


type CardSideProps = {
  backgroundColor: string, 
  contentStyle: {||},
  containerStyle: {||},
  cardRotation: string,
  children: any,
};

const CardSide = (props) => {
  const { 
    children, 
    cardRotation, 
    backgroundColor,
    containerStyle,
    contentStyle,
   } = props; 

   return (
      <CardSideWrapper 
        backgroundColor={backgroundColor}
        style={containerStyle}
        cardRotation={cardRotation}
      >
        <div style={contentStyle}>
          { children }
        </div>
      </CardSideWrapper>
   );
};



const CardWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  perspective: 1500px;
  transform-style: preserve-3d;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  margin-bottom: 1rem;
`;


export default Card; 