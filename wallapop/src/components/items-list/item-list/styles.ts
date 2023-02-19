import styled from "styled-components";

export const ItemsListContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const LoadMoreButton = styled.button`
    align-self: center;
    padding: 12px 20px;
    border-color: #13c1ac;
    background-color: #13c1ac;
    font-size: 1rem;
    color: #fff;
    border-radius: 25px;
    border: 0;
    width: 180px;
    height: 50px;
    margin: 24px 0 24px 0;
    font-weight: 700;

    &:hover {
        cursor: pointer;
    }
`;