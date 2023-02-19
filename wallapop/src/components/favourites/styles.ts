import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
`;

export const Title = styled.h2`
    font-size: 16px;

    @media (min-width: 700px) {
        font-size: 24px;
    }
`;

export const Wrapper = styled.div`
    background-color: #fff;
    border-radius: 8px;
    height: 400px;
    overflow-y: auto;
    padding: 24px 12px;
    width: 500px;

    @media (min-width: 700px) {
        padding: 32px 24px;
        height: 500px;
        width: 600px;
    }
`;