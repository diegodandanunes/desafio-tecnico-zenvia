import React from 'react';
import { render } from '@testing-library/react';

import { Header } from './';

it("renders", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
});
