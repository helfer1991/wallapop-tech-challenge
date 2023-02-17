import styled from "styled-components";

type FilterButtonProps = {
    isSelected?: boolean;
}

export const Container = styled.div`
    margin: auto;
    width: 90%;
`;

export const ItemsListContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: auto;
`;

export const SearchTitleButton = styled.button`
    align-self: self-start;
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 8px 0;
    background-color: transparent;
    border: 0;
`;

export const SearchButtonText = styled.p`
    display: inline-block;
    margin: 0 0 0 4px;
    font-size: 16px;
    font-weight: 700;
    color: #13c1ac;
`;

export const SortButton = styled.button`
    align-self: self-start;
    background-color: transparent;
    border: 0;
    color: #000;
    font-size: 14px;
`;

export const FilterButtonWrapper = styled.span`
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
`;

export const FilterButton = styled.button<FilterButtonProps>`
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

export const LoadMoreButton = styled.button`
    align-self: center;
    padding: 12px 20px;
    border-color: #13c1ac;
    background-color: #13c1ac;
    font-size: 1rem;
    color: #fff;
    border-radius: 25px;
    width: 180px;
    height: 50px;
    margin: 24px 0 24px 0;
    font-weight: 700;
`;