import React from "react";

import { Container, SadIcon, Description } from './styles';

type EmptyStateProps = {
    hasIcon?: boolean;
    description: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ hasIcon = true, description }) => (
    <Container data-testid="empty-state">
        {hasIcon && <SadIcon data-testid="icon-sad" />}
        <Description>{description}</Description>
    </Container>
)