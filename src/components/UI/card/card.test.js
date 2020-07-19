import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Card } from './';
import fakeData from '../../../__mocks__/character-details';
const history = createMemoryHistory();

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Router history={history}><Card info={fakeData.data[0]} /></Router>);
    expect(asFragment()).toMatchSnapshot();
});

it('correctly sets up card image tag', () => {
    const { getByTestId } = render(<Router history={history}><Card info={fakeData.data[0]} /></Router>);
    expect(getByTestId('card-image').src).toMatch(fakeData.data[0].img);
    expect(getByTestId('card-image').alt).toMatch(fakeData.data[0].name);
});

it('correctly links character details URL', () => {
    const { getByTestId } = render(<Router history={history}><Card info={fakeData.data[0]} /></Router>);
    expect(getByTestId('card-link').href).toMatch(`character/${fakeData.data[0].char_id}`);
});
