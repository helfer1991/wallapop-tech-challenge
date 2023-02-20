import React from 'react';

import { Container, SearchBarSkeleton, SearchButtonSkeleton, SearchButtonsWrapper, SortButtonSkeleton, CardsWrapper, CardSkeleton } from './styles';

export const Skeleton: React.FC = () => {
    return (
        <Container data-testid="skeleton-items-list">
            <SearchBarSkeleton />
            <SearchButtonsWrapper>
                <SearchButtonSkeleton />
                <SearchButtonSkeleton />
                <SearchButtonSkeleton />
                <SearchButtonSkeleton />
            </SearchButtonsWrapper>
            <SortButtonSkeleton />
            <CardsWrapper>
                <CardSkeleton />
                <CardSkeleton />
            </CardsWrapper>
        </Container>
    )
}