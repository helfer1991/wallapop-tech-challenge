import styled from "styled-components";

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export const Card = styled.article`
    border: 1px solid rgba(207, 216, 220, .5);
    border-radius: 8px;
    padding: 24px;
`;

export const UpperWrapper = styled.span`
    display: flex;
    justify-content: space-between;
`;

export const Image = styled.img`
    height: 200px;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 12px;
`;

export const Title = styled.h2`
    font-weight: 700;
    margin: 0 0 12px 0;
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
`;

export const HeartFull = styled(AiFillHeart)`
    display: block;
    height: 24px;
    padding-bottom: 8px;
    width: 28px;
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