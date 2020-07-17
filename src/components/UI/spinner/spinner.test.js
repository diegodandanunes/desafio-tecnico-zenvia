import React from 'react';
import { render } from '@testing-library/react';

import { Spinner } from './';

it("renders", () => {
    const { asFragment } = render(<Spinner />);
    expect(asFragment()).toMatchSnapshot();
});
