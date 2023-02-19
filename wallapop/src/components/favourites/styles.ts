import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 24px 12px;
    width: 500px;
    height: 400px;
    overflow-y: auto;

    @media (min-width: 700px) {
        padding: 32px 16px;
        height: 500px;
        width: 600px;
    }
`;