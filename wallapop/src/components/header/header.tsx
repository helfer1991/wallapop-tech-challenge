import React, { useState } from "react";

import { Favourites } from "../favourites";
import { Container, Logo, FavouritesButton } from "./styles";

export const Header: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <Container data-testid="header">
            <Logo alt="wallapop-logo" src="https://mir-s3-cdn-cf.behance.net/projects/404/a009a0150534249.Y3JvcCw4MDgsNjMyLDAsMA.png" />
            <FavouritesButton onClick={() => setShow(!show)} type="button">Favourites</FavouritesButton>
            <Favourites show={show} onClose={() => setShow(false)} />
        </Container>
    )
}