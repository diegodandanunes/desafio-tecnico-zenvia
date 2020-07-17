import React, { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import endpoints from '../../common/endpoints';

import { Header } from '../UI/header';
import { ContainerFluid } from '../../common/containers';
import { CharacterStyle } from './style';
import { Spinner } from '../UI/spinner';

const Character = () => {
    const [character, setCharacter] = useState(
        {
            name: '',
            portrayed: '',
            img: '',
            nickname: '',
            occupation: []
        });

    const [isLoading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${endpoints.CHARACTERS}/${id}`)
            .then(response => {
                setLoading(false);
                setCharacter(response.data[0]);
            })
            .catch(error => console.log('erro ao buscar personagem: ', error));
    }, [id])

    return (
        <ContainerFluid>
            <div className="min-h-100 display-flex">
                <div className="display-flex flex-column w-100">
                    <Header />
                    <CharacterStyle className="display-flex align-center justify-center flex-grow flex-wrap">
                        {
                            isLoading
                                ? <Spinner />
                                : (
                                    <div>
                                        {/* Não vou exibir o "status" do personagem por que eu ainda quero ver essa série e já tomei uns spoilers kkkkk */}
                                        <h1 data-testid="character-name">{character.name}</h1><i>({character.portrayed})</i>
                                        <h4 data-testid="character-birthday">Birthday: {character.birthday}</h4>
                                        <h4 data-testid="character-nickname">Nickname: {character.nickname}</h4>
                                        <img data-testid="character-img" src={character.img} alt="" />
                                        {
                                            character.occupation.map(occupation => <span key={occupation} className="occupation">{occupation}</span>)
                                        }
                                        <Link className="back" to="/"><h5>Voltar</h5></Link>
                                    </div>
                                )
                        }
                    </CharacterStyle>
                </div>
            </div>
        </ContainerFluid>
    );
};

export default Character;
