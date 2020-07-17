import React from 'react';

import { Link } from 'react-router-dom';
import { CardStyle } from "./style";

export const Card = props => {
    return (
        <CardStyle>
                <Link data-testid="card-link" to={`character/${props.info.char_id}`}>
                    <div className="card-overlay"></div>
                    <img data-testid="card-image" src={props.info.img} alt={props.info.name}/>
                </Link>
        </CardStyle>
    );
};