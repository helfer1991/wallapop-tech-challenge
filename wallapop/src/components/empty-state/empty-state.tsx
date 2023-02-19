import React from "react";

import { Container, SadIcon, Description } from './styles';

export const EmptyState: React.FC = () => (
    <Container data-testid="empty-state">
        <SadIcon data-testid="icon-sad" />
        <Description>Your search had no results. Try again please!</Description>
    </Container>
)