// @flow strict

import * as React from 'react';
import Alert from '../common/Alert';

type Props = {||};

class Test extends React.Component<Props> {
  render() {
    return (
      <div>
        <Alert 
          type={'warning'}
          title={'You got a Warning!'}
          text={'Hello text'}
        />
      </div>
    );
  }
}

export default Test;