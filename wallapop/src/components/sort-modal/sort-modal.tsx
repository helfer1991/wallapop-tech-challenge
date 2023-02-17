import React from 'react';

import { Container, Wrapper, Title, CategoryButton } from './styles';

type SortModalProps = {
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    show: boolean;
    onClose: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

const sortCriteria = ['Title', 'Description', 'Price', 'Email'];

export const SortModal: React.FC<SortModalProps> = ({ setCategory, show, onClose }) => {
    return (
        show ?
        <Container onClick={onClose}>
            <Wrapper onClick={e => e.stopPropagation()}>
                <Title>Sort by:</Title>
                {sortCriteria.map((criteria, index) => 
                    <CategoryButton onClick={() => setCategory(criteria)} isLastCategory={index === 3} key={`${criteria}-${index}`}>
                        {criteria}
                    </CategoryButton>
                    )
                }
            </Wrapper>
        </Container>
        : null
    );
}