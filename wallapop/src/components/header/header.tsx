import React, { useState } from "react";

import { Favourites } from "../favourites";
import { Container, FavouritesButton } from "./styles";

export const Header: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <Container>
            <p>logo</p>
            <FavouritesButton onClick={() => setShow(!show)}>Favourites</FavouritesButton>
            <Favourites show={show} onClose={() => setShow(false)} />
        </Container>
    )
}