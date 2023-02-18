import styled from "styled-components";

type FilterButtonProps = {
    isSelected?: boolean;
}

export const Container = styled.div`
    margin: auto;
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
`;

export const SortButtonText = styled.p`
    display: inline-block;
    margin: 0 0 0 4px;
    font-size: 16px;
    font-weight: 700;
    color: #13c1ac;
    margin: 0 12px;
`;

export const SearchButtonWrapper = styled.span`
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
`;

export const SearchButton = styled.button<FilterButtonProps>`
    align-self: center;
    background-color: ${(props) => props.isSelected ? '#13c1ac' : '#fff' };
    box-shadow: 0 1px 4px #2532381a;
    border-radius: 25px;
    height: 30px;
    width: 100px;
    margin: 12px 0;
    font-weight: 700;
    border-color: rgba(207,216,220,.5);
    font-size: 0.75rem;
    outline: none;
    color: ${(props) => props.isSelected ? '#fff' : '#000' };;
`;