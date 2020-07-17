import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Card } from './';

const history = createMemoryHistory();
const profile = {
    char_id: '1',
    img: 'google.com',
    name: 'Test'
};

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Router history={history}><Card info={profile} /></Router>);
    expect(asFragment()).toMatchSnapshot();
});

it('correctly sets up card image tag', () => {
    const { getByTestId } = render(<Router history={history}><Card info={profile} /></Router>);
    expect(getByTestId('card-image').src).toMatch(profile.img);
    expect(getByTestId('card-image').alt).toMatch(profile.name);
});

it('correctly links character details URL', () => {
    const { getByTestId } = render(<Router history={history}><Card info={profile} /></Router>);
    expect(getByTestId('card-link').href).toMatch(`character/${profile.char_id}`);
});
