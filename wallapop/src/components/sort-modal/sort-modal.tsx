import React from 'react';

import { CATEGORIES } from '../../constants';

import { Container, Wrapper, Title, CategoryButton} from './styles';

type SortModalProps = {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    show: boolean;
    onClose: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export const SortModal: React.FC<SortModalProps> = ({ category, setCategory, show, onClose }) => {
    if(!show) { 
        return null;
    }

    return (
        <Container onClick={onClose} data-testid="sort-modal-container">
            <Wrapper>
                <Title>Sort by:</Title>
                {CATEGORIES.map((criteria, index) => 
                    <CategoryButton
                        data-testid={`sort-by-${criteria.toLowerCase()}-button`}
                        onClick={() => setCategory(criteria.toLowerCase())}
                        key={`${criteria}-${index}`}
                        isSelected={criteria.toLowerCase() === category}
                    >
                        {criteria}
                    </CategoryButton>
                    )
                }
            </Wrapper>
        </Container>
    )
};