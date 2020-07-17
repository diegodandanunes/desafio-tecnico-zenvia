import React from 'react';

import { ContainerFluid } from '../../../common/containers';
import { HeaderStyle } from './style';
import logo from '../../../assets/images/logo.png';

export const Header = props => {
    return (
        <header>
            <ContainerFluid>
                <HeaderStyle>
                    <img src={logo} alt="Logo Diego Nunes" />
                    <ul>
                        <li>Desafio técnico <span>|</span> <strong>Zenvia</strong></li>
                    </ul>
                </HeaderStyle>
            </ContainerFluid>
        </header>
    );
};