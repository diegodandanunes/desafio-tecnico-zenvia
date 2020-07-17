import styled from 'styled-components';
import colors from '../../../common/colors';

export const CardStyle = styled.div`
    width: 180px;
    height: 280px;
    background-color: #fff;
    margin: 20px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    box-shadow: 0px -1px 50px -24px ${colors.lightTeal};
    
    .card-overlay {
        width: 100%;
        height: 100%;
        background-color: ${colors.lightTeal};
        position: absolute;
        z-index: 2;
        opacity: 0;
        transition: opacity .5s;
    }

    .card-overlay:hover {
        opacity: 0.3;
    }

    .card-overlay:hover + img {
        height: 300px;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 280px;
        position: absolute;
        z-index: 1;
        transition: all .5s;
        margin: auto;
    }

`;