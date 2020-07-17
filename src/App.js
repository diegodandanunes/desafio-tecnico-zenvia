import React from 'react';

import { Switch, HashRouter } from 'react-router-dom';
import { Route } from 'react-router';
import CharacterList from './components/characterList/';
import Character from './components/character/';

const App = () => {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={CharacterList}
                    />
                    <Route
                        exact
                        path="/character/:id"
                        component={Character}
                    />
                </Switch>
            </HashRouter>
        </>
    );
}

export default App;