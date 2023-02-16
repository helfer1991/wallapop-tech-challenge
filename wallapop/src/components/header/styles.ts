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
`;

export const FavouritesButton = styled.button`
    background-color: transparent;
    border: 0;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
`;