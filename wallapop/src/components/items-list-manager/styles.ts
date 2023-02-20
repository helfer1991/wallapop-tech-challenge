import styled from "styled-components";

type SearchButtonProps = {
    isSelected?: boolean;
}

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 24px auto;
    width: 90%;
`;

export const SortButton = styled.button`
    align-self: self-start;
    align-items: center;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 16px 0;
    background-color: transparent;
    border: 0;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 700px) {
        font-size: 24px;
        margin: 0 0 32px 0;
    }
`;

export const SortButtonText = styled.p`
    display: inline-block;
    margin: 0 0 0 4px;
    font-size: 16px;
    font-weight: 700;
    color: #13c1ac;
    margin: 0 12px;

    @media (min-width: 700px) {
        font-size: 24px;
    }
`;

export const SearchButtonWrapper = styled.span`
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
`;

export const SearchButton = styled.button<SearchButtonProps>`
    align-self: center;
    background-color: ${(props) => props.isSelected ? '#13c1ac' : '#fff' };
    box-shadow: 0 5px 8px #2532381a;
    border-radius: 25px;
    height: 30px;
    width: 100px;
    margin: 12px 0;
    font-weight: 700;
    border: 0;
    font-size: 0.75rem;
    outline: none;
    color: ${(props) => props.isSelected ? '#fff' : '#000' };

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 700px) {
        font-size: 1.25rem;
        height: 40px;
        margin: 24px 0;
        width: 200px;
    }
`;