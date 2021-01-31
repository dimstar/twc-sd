import React from 'react';
import { render } from '@testing-library/react';

import Home from './index';

describe('<Home />', () => {
  it('Renders join us header element.', () => {
    render(<Home />);
    const joinUs = document.querySelector('#join-us');
    expect(joinUs).not.toBeNull();
  });
});
