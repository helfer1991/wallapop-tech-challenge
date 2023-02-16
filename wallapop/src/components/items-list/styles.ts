import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: auto;
    width: 90%;
`;

export const LoadMoreButton = styled.button`
    align-self: center;
    padding: 12px 20px;
    border-color: #13c1ac;
    background-color: #13c1ac;
    font-size: 1rem;
    color: #fff;
    border-radius: 25px;
    transition: all .2s ease-in-out, padding 0s;
    width: 180px;
    height: 50px;
    margin: 24px 0 24px 0;
    font-weight: 700;
`;