import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 24px auto;
    width: 90%;
`;

export const SearchBarSkeleton = styled.div`
    background-color: rgba(207,216,220,.5);
    border-radius: 25px;
    height: 44px;
    margin-bottom: 12px;
    width: 100%;

    @media (min-width: 700px) {
        height: 60px;
    }
`;

export const SearchButtonsWrapper = styled.span`
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
`;

export const SearchButtonSkeleton = styled.div`
    background-color: rgba(207,216,220,.5);
    border-radius: 25px;
    height: 30px;
    margin: 24px 0;
    width: 200px;

    @media (min-width: 700px) {
        height: 40px;
    }
`;

export const SortButtonSkeleton = styled.div`
    background-color: rgba(207,216,220,.5);
    height: 20px;
    margin: 0 0 32px 0;
    width: 140px;

    @media (min-width: 700px) {
        height: 30px;
        width: 200px;
    }
`;

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const CardSkeleton = styled.div`
    background-color: rgba(207,216,220,.5);
    border-radius: 8px;
    height: 440px;
    width: 100%;

    @media (min-width: 700px) {
        height: 250px;
    }
`;