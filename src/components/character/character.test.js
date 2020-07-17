import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Character from './';
import fakeData from '../../__mocks__/character-details';
import axios from 'axios';
const history = createMemoryHistory();

afterEach(cleanup);

it("renders", async() => {
    const { asFragment } = render(<Router history={history}><Character /></Router>);

    await waitFor(() => expect(asFragment()).toMatchSnapshot());
});

it('shows character information', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(fakeData))

    const { getByTestId } = render(<Router history={history}><Character /></Router>);
    const name = await waitFor(() => getByTestId('character-name'));
    const birthday = await waitFor(() => getByTestId('character-birthday'));
    const nickname = await waitFor(() => getByTestId('character-nickname'));
    const img = await waitFor(() => getByTestId('character-img'));
    
    expect(name.textContent).toMatch(fakeData.data[0].name);
    expect(birthday.textContent).toMatch(fakeData.data[0].birthday);
    expect(nickname.textContent).toMatch(fakeData.data[0].nickname);
    expect(img.src).toMatch(fakeData.data[0].img);
});