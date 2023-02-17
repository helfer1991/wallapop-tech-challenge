import styled from "styled-components";

export const Card = styled.article`
    border: 1px solid rgba(207, 216, 220, .5);
    border-radius: 8px;
    margin-top: 24px;
    padding: 24px;
`;

export const UpperWrapper = styled.span`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.h3`
    font-weight: 700;
    margin: 0;
`;

export const Image = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 10px;
`;
