import React from 'react';

import { CATEGORIES } from '../../constants';

import { Container, Wrapper, Title, CategoryButton } from './styles';

type SortModalProps = {
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    show: boolean;
    onClose: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export const SortModal: React.FC<SortModalProps> = ({ setCategory, show, onClose }) => (
    show ?
    <Container onClick={onClose} data-testid="sort-modal-container">
        <Wrapper>
            <Title>Sort by:</Title>
            {CATEGORIES.map((criteria, index) => 
                <CategoryButton data-testid={`sort-by-${criteria.toLowerCase()}-button`} onClick={() => setCategory(criteria.toLowerCase())} isLastCategory={index === 3} key={`${criteria}-${index}`}>
                    {criteria}
                </CategoryButton>
                )
            }
        </Wrapper>
    </Container>
    : null
);