import styled from 'styled-components';
import colors from '../../common/colors';
import breakpoints from '../../common/breakpoints';

export const CharacterStyle = styled.div`
    background-color: #111;
    padding: 15px;
    color: #fff;

    img {
        width: 200px;
        display: block;
        border-radius: 5px;
        margin: 30px 0;
        box-shadow: 0px -1px 50px -24px ${colors.lightTeal};
    }

    h1 {
        color: ${colors.lightTeal};
        margin: 0 10px 0 0;
    }

    h1 i {
        font-size: 13px;
        color: #fff;
    }

    .occupation {
        background-color: ${colors.darkPurple};
        color: #fff;
        padding: 10px 15px;
        display: inline-block;
        border-radius: 15px;
        margin: 15px 15px 15px 0;
        
        @media(min-width: ${breakpoints.sm}) {
            margin-right: 15px;
        }
    }

    .back {
        color: ${colors.darkTeal};
    }
`