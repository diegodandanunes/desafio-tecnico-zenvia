import styled from 'styled-components';
import colors from '../../../common/colors';
import breakpoints from '../../../common/breakpoints';

export const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.darkPurple};
    color: #fff;
    padding: 20px 0;
    border-bottom: 8px solid ${colors.darkerPurple};

    @media (max-width: ${breakpoints.md}) {
        justify-content: center;
    }
    
    ul {
        list-style: none;
        padding-left: 15px;
        text-align: left;
    }

    ul li {
        border-bottom: 2px solid transparent;
        font-size: 13px;

        @media (max-width: ${breakpoints.md}) {
            display: none;
        }
    }

    ul li span {
        padding: 0 5px;
    }


    img {
        width: 100px;
        padding-right: 15px;
    }
`;