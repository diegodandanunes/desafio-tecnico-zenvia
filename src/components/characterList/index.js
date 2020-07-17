import React, { useEffect, useState } from 'react';

import axios from 'axios';
import endpoints from '../../common/endpoints';

import { ContainerFluid } from '../../common/containers';
import { CharacterListStyle } from './style';
import { Spinner } from '../UI/spinner';
import { Header } from '../UI/header';
import { Card } from '../UI/card';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(endpoints.CHARACTERS)
            .then(response => {
                setLoading(false);
                setCharacters(response.data);
            })
            .catch(error => console.log('erro ao buscar personagens: ', error));
    }, [])

    return (
        <ContainerFluid>
            <div className="min-h-100 display-flex">
                <div className="display-flex flex-column w-100">
                    <Header />
                    <CharacterListStyle className="display-flex align-center justify-center flex-grow flex-wrap">
                        {   
                            isLoading 
                                ? <Spinner />
                                : <div data-testid="character-list">{ characters.map(character => <Card key={character.char_id} info={character}/>)}</div>
                        }
                    </CharacterListStyle>
                </div>
            </div>
        </ContainerFluid>
    );
};

export default CharacterList;
