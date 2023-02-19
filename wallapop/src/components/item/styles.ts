import styled from "styled-components";

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export const Card = styled.article`
    border: 1px solid rgba(207, 216, 220, .5);
    border-radius: 8px;
    padding: 24px;

    @media (min-width: 700px) {
        display: flex;
        flex-direction: row-reverse;
    }
`;

export const TextWrapper = styled.div`
    @media (min-width: 700px) {
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 100%;
    }
`;

export const UpperWrapper = styled.span`
    display: flex;
    justify-content: space-between;

    @media (min-width: 1200px) {
        align-items: start;
    }
`;

export const Image = styled.img`
    height: 200px;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 12px;

    @media (min-width: 700px) {
        margin: 0 0 0 24px;
        height: 200px;
        width: 250px;
    }
`;

export const Title = styled.h2`
    font-weight: 700;
    margin: 0 0 12px 0;

    @media (min-width: 1200px) {
        font-size: 32px;
        margin-right: 24px;
    }
`;

export const FavouriteButton = styled.button`
    margin: 0;
    background-color: transparent;
    border: 0;
`;

export const HeartEmpty = styled(AiOutlineHeart)`
    display: block;
    height: 24px;
    padding-bottom: 8px;
    width: 28px;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 1200px) {
        height: 44px;
    }
`;

export const HeartFull = styled(AiFillHeart)`
    color: #FF4033;
    display: block;
    height: 24px;
    padding-bottom: 8px;
    width: 28px;

    @media (min-width: 1200px) {
        height: 44px;
    }
`;

export const Description = styled.p`
    line-height: 1.5;
    margin: 0 0 12px 0;
`;

export const Price = styled.p`
    margin: 0 0 12px 0;
    font-weight: 700;
`;

export const Email = styled.p`
    margin: 0;
`;