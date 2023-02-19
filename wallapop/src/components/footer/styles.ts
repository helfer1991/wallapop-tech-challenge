import styled from "styled-components";

import { AiFillHeart } from 'react-icons/ai';

export const Container = styled.footer`
    border-top: 2px solid rgba(207,216,220,.5);
    height: 200px;
    width: 100%;
`;

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 25px 75px;
`;

export const Image = styled.img`
    height: 100px;
    width: 300px;
`;

export const TextWrapper = styled.span`
    align-items: center;
    display: flex;
    gap: 24px;
`;

export const Name = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: rgba(207,216,230);
`;

export const HeartFull = styled(AiFillHeart)`
    color: #FF4033;
    display: block;
    height: 32px;
    width: 32px;
`;