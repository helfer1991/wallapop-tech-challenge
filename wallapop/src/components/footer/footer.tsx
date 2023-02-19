import React from "react";

import { Container, Image, Wrapper, TextWrapper, Name, HeartFull } from "./styles";

export const Footer: React.FC = () => (
    <Container>
        <Wrapper>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Wallapop.svg/2560px-Wallapop.svg.png" loading="lazy" alt="wallapop-image-footer" />
            <TextWrapper>
                <Name>Made by Helder with</Name>
                <HeartFull data-testid="icon-heart-full" />
            </TextWrapper>
        </Wrapper>
    </Container>
)