import styled from "styled-components";

export const Card = styled.article`
    border: 1px solid rgba(207, 216, 220, .5);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    padding: 24px;
`;

export const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled.h3`
    font-weight: 700;
    margin: 0;

    @media (min-width: 700px) {
        font-size: 24px;
    }
`;

export const Image = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 10px;

    @media (min-width: 700px) {
        height: 120px;
        width: 120px;
    }
`;

export const RemoveFavouriteButton = styled.button`
    background-color: #13c1ac;
    border-radius: 25px;
    height: 30px;
    border: 0;
    width: 100px;
    font-weight: 700;
    font-size: 16px;
    border-color: #13c1ac;
    font-size: 0.75rem;
    outline: none;
    color: #fff;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 700px) {
        font-size: 18px;
        height: 40px;
        width: 120px;
    }
`;