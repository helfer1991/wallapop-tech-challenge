import styled from "styled-components";

export const Container = styled.header`
    align-items: center;
    display: flex;
    padding: 12px 48px;
    justify-content: space-between;
    background-color: #13c1ac;
    height: 70px;
    position: sticky;
    border-bottom: 2px solid #cfd8dc80;
    z-index: 10;
    margin-bottom: 48px;

    @media (min-width: 700px) {
        height: 160px;
    }
`;

export const Logo = styled.img`
    height: 10vh;
    width: 15vh;

    @media (min-width: 700px) {
        height: 15vh;
        width: 20vh;
    }
`;

export const FavouritesButton = styled.button`
    background-color: transparent;
    border: 0;
    color: #fff;
    font-weight: 700;
    font-size: 18px;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 700px) {
        font-size: 24px;
    }
`;