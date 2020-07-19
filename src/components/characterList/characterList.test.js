import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CharacterList from './';
import fakeData from '../../__mocks__/character-list';

import axios from 'axios';

const history = createMemoryHistory();

afterEach(cleanup);

it('renders list', async () => {
    const { asFragment } = render(<Router history={history}><CharacterList /></Router>);
    await waitFor(() => expect(asFragment()).toMatchSnapshot());
});

it('display a list of characters', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(fakeData));
    const { getByTestId } = render(<Router history={history}><CharacterList /></Router>);
    const list = await waitFor(() => getByTestId('character-list'));
    expect(list.children.length).toBe(fakeData.data.length);
})