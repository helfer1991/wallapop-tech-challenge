import React from "react";

import { Card, UpperWrapper, Title, Image } from './styles';

type ItemModalProps = {
    title: string;
    image: string;
}

export const ItemModal: React.FC<ItemModalProps> = ({ title, image }) => {
    return (
        <Card>
            <UpperWrapper>
                <Title>{title}</Title>
                <Image src={image} />
            </UpperWrapper>
        </Card>
    )
}