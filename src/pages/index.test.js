import React from 'react';
import renderer from 'react-test-renderer';

import Home from './index';

describe('<Home />', () => {
  it('Matches the <Home /> snapshot', () => {
    const home = renderer.create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
  });
});
