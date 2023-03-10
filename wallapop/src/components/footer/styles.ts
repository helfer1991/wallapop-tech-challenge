import styled from "styled-components";

import { AiFillHeart } from 'react-icons/ai';

export const Container = styled.footer`
    border-top: 2px solid rgba(207,216,220,.5);
    height: 200px;
    width: 100%;
`;

export const Wrapper = styled.div`
    align-items: center;
    flex-direction: column;
    display: flex;
    justify-content: space-between;

    @media (min-width: 700px) {
        flex-direction: row;
        margin-top: 32px;
    }

    @media (min-width: 1200px) {
        padding: 25px 75px;
    }
`;

export const Image = styled.img`
    height: 100px;
    width: 300px;
`;

export const TextWrapper = styled.span`
    align-items: center;
    display: flex;
    gap: 4px;

    @media (min-width: 700px) {
        gap: 24px;
    }
`;

export const Name = styled.h1`
    color: rgba(207,216,230);
    font-size: 18px;
    font-weight: 700;
    margin: 0;

    @media (min-width: 700px) {
        font-size: 32px;
    }
`;

export const HeartFull = styled(AiFillHeart)`
    color: #FF4033;
    display: block;
    height: 20px;
    width: 20px;

    @media (min-width: 700px) {
        height: 32px;
        padding-right: 24px;
        width: 32px;
    }
`;