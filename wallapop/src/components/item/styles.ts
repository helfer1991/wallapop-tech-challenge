import styled from "styled-components";

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