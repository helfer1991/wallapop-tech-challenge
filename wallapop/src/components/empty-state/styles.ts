import styled from "styled-components";

import { BiSad } from 'react-icons/bi';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;

    @media (min-width: 1200px) {
        height: 25vh;
    }
`;

export const SadIcon = styled(BiSad)`
    align-self: center;
    color: rgba(207,216,220);
    height: 64px;
    width: 64px;

    @media (min-width: 700px) {
        height: 92px;
        width: 92px;
    }
`;

export const Description = styled.h1`
    color: rgba(207,216,220);
    font-size: 24px;
    font-weight: 700;
    margin: 24px 0 0 0;

    @media (min-width: 700px) {
        font-size: 32px;
    }
`;