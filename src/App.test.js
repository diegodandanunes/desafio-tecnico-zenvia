import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from './App';

it('renders', async () => {
  const div = document.createElement('div');
  await act(async () => {
    render(<App />, div);
  });
  // expect(1+1).toBeGreaterThan(1);
});