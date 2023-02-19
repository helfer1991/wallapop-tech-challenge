import styled from 'styled-components';

type OptionalMarginBottom = {
    isLastCategory?: boolean;
}

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
    padding: 24px;
    width: 300px;
`;

export const Title = styled.h4`
    font-weight: 700;
    font-size: 16px;
    margin: 0 0 24px 0;
`;

export const CategoryButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CategoryButton = styled.ul<OptionalMarginBottom>`
    display: block;
    background-color: transparent;
    border-top: 1px solid rgba(0,0,0,.15);
    color: #212529;
    font-size: 1rem;
    margin-bottom: 0;
    padding: 12px 0 0 0;

    &:hover {
        cursor: pointer;
    }
`;