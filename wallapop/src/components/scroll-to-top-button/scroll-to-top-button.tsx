import React, { useState, useLayoutEffect } from 'react';

import { Wrapper, Icon } from './styles';

export const ScrollToTopButton: React.FC = () => {
    const [showButton, setShowButton] = useState<boolean>(false);

    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 1500 ? setShowButton(true) : setShowButton(false);
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Wrapper>
            {showButton && <Icon data-testid="scroll-button" onClick={goToTop} />}
        </Wrapper>
    )
}